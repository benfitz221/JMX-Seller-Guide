"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Users,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Star,
  Building,
  User,
  TrendingUp,
  Target,
  Clock,
  MapPin,
  Network,
  BarChart3,
  Settings,
  HelpCircle,
  Loader2,
} from "lucide-react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  BarChart,
  Bar,
} from "recharts";
import { useAuth } from "../lib/useAuth";
import { 
  createStakeholder, 
  updateStakeholder, 
  deleteStakeholder, 
  subscribeToStakeholders 
} from "../lib/stakeholders";

interface Stakeholder {
  id: string;
  name: string;
  organization: string;
  position: string;
  email: string;
  phone: string;
  careerInfluence: number; // 1-10: Their power to affect your career trajectory
  relationshipSupport: number; // 1-10: How supportive they are (1=actively opposed, 5=neutral, 10=strong champion)
  engagementDifficulty: number; // 1-10: How hard they are to reach/maintain relationship with (1=very accessible, 10=very difficult)
  relationship: "ally" | "neutral" | "opponent" | "unknown";
  category:
    | "internal"
    | "external"
    | "client"
    | "vendor"
    | "government"
    | "media"
    | "community";
  stakeholderType:
    | "power_broker"
    | "decision_maker"
    | "influencer"
    | "gatekeeper"
    | "champion"
    | "analyst"
    | "connector";
  engagementFrequency:
    | "weekly"
    | "monthly"
    | "quarterly"
    | "annually"
    | "as_needed";
  lastContact: string;
  coreInterests: string[];
  potentialOutcomes: string[];
  notes: string;
  location: string;
  connections: string[]; // IDs of connected stakeholders
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Metric definitions for UI/UX guidance
const metricDefinitions = {
  careerInfluence: {
    label: "Career Influence",
    description: "Their power to affect your career trajectory",
    scale: {
      low: "1-3: Limited influence on career decisions",
      medium: "4-7: Moderate influence, can provide opportunities",
      high: "8-10: Significant power over career outcomes"
    }
  },
  relationshipSupport: {
    label: "Relationship Support", 
    description: "How supportive they are of your career goals",
    scale: {
      low: "1-3: Actively opposed or blocking your progress",
      medium: "4-7: Neutral or mixed support",
      high: "8-10: Strong champion and advocate"
    }
  },
  engagementDifficulty: {
    label: "Engagement Difficulty",
    description: "How hard they are to reach and maintain relationship with",
    scale: {
      low: "1-3: Very accessible, easy to engage",
      medium: "4-7: Moderate effort required",
      high: "8-10: Very difficult to reach or maintain contact"
    }
  }
} as const;

const CareerStakeholderMatrix: React.FC = () => {
  const { user, loading } = useAuth();
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [selectedStakeholder, setSelectedStakeholder] =
    useState<Stakeholder | null>(null);
  const [isAddingStakeholder, setIsAddingStakeholder] = useState(false);
  const [isEditingStakeholder, setIsEditingStakeholder] = useState(false);
  const [stakeholderToDelete, setStakeholderToDelete] =
    useState<Stakeholder | null>(null);
  const [showTypeGuide, setShowTypeGuide] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"matrix" | "network" | "analytics">(
    "matrix"
  );
  const [matrixView, setMatrixView] = useState<
    "influence-support" | "influence-difficulty"
  >("influence-support");
  const [isSaving, setIsSaving] = useState(false);

  // Stakeholder type definitions for career planning
  const stakeholderTypeDefinitions = {
    power_broker: {
      title: "Power Broker",
      description:
        "Individuals with significant influence who can broker deals, open doors, and make strategic introductions. They often operate behind the scenes and have extensive networks.",
      characteristics: [
        "Extensive network connections",
        "Ability to influence key decisions",
        "Often consulted by senior leadership",
        "Can facilitate introductions and opportunities",
      ],
      examples: [
        "Senior executives",
        "Board members",
        "Industry veterans",
        "Well-connected consultants",
      ],
      icon: "⭐",
      color: "#f59e0b",
    },
    decision_maker: {
      title: "Decision Maker",
      description:
        "People with direct authority to make hiring, promotion, budget, or strategic decisions that directly impact your career trajectory.",
      characteristics: [
        "Direct decision-making authority",
        "Budget control",
        "Hiring/promotion power",
        "Strategic planning involvement",
      ],
      examples: [
        "Your boss",
        "VP/Director level",
        "CEO/C-suite",
        "Department heads",
      ],
      icon: "🎯",
      color: "#ef4444",
    },
    influencer: {
      title: "Influencer",
      description:
        "Respected professionals whose opinions carry weight. They may not have formal authority but their recommendations and endorsements significantly impact decisions.",
      characteristics: [
        "Industry reputation",
        "Thought leadership",
        "Respected expertise",
        "Strong professional brand",
      ],
      examples: [
        "Industry experts",
        "Conference speakers",
        "Published authors",
        "Award winners",
      ],
      icon: "📈",
      color: "#8b5cf6",
    },
    gatekeeper: {
      title: "Gatekeeper",
      description:
        "Individuals who control access to opportunities, information, or key people. They often filter who gets through to decision makers.",
      characteristics: [
        "Controls access to resources",
        "Information filtering role",
        "Relationship with decision makers",
        "Process ownership",
      ],
      examples: [
        "Executive assistants",
        "HR managers",
        "Recruiters",
        "Project managers",
      ],
      icon: "🏢",
      color: "#06b6d4",
    },
    champion: {
      title: "Champion",
      description:
        "Strong advocates who actively promote your interests, speak positively about your work, and support your career advancement.",
      characteristics: [
        "Active advocacy",
        "Positive reputation building",
        "Willing to recommend",
        "Invested in your success",
      ],
      examples: [
        "Mentors",
        "Supportive colleagues",
        "Former managers",
        "Satisfied clients",
      ],
      icon: "👥",
      color: "#10b981",
    },
    analyst: {
      title: "Analyst",
      description:
        "Individuals who evaluate performance, assess capabilities, or provide technical expertise that influences career-related decisions.",
      characteristics: [
        "Technical evaluation role",
        "Performance assessment",
        "Subject matter expertise",
        "Advisory capacity",
      ],
      examples: [
        "Technical reviewers",
        "Performance evaluators",
        "Consultants",
        "Peer reviewers",
      ],
      icon: "📊",
      color: "#6366f1",
    },
    connector: {
      title: "Connector",
      description:
        "Well-networked individuals who excel at making introductions and connecting people across industries, organizations, or functional areas.",
      characteristics: [
        "Extensive professional network",
        "Relationship building skills",
        "Cross-industry connections",
        "Introduction facilitation",
      ],
      examples: [
        "Industry association leaders",
        "Conference organizers",
        "Alumni network leaders",
        "Professional group heads",
      ],
      icon: "🔗",
      color: "#84cc16",
    },
  };

  // Load stakeholders from Firebase when user is authenticated
  useEffect(() => {
    if (!user) return;

    const unsubscribe = subscribeToStakeholders(user.uid, (stakeholders) => {
      setStakeholders(stakeholders);
    });

    return () => unsubscribe();
  }, [user]);

  const filteredStakeholders = useMemo(() => {
    return stakeholders.filter((stakeholder) => {
      const matchesSearch =
        stakeholder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stakeholder.organization
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        stakeholder.position.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "all" || stakeholder.category === filterCategory;
      const matchesType =
        filterType === "all" || stakeholder.stakeholderType === filterType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [stakeholders, searchTerm, filterCategory, filterType]);

  const getMatrixData = () => {
    switch (matrixView) {
      case "influence-support":
        return filteredStakeholders.map((s) => ({
          ...s,
          x: s.careerInfluence,
          y: s.relationshipSupport,
        }));
      case "influence-difficulty":
        return filteredStakeholders.map((s) => ({
          ...s,
          x: s.careerInfluence,
          y: s.engagementDifficulty,
        }));
      default:
        return filteredStakeholders.map((s) => ({
          ...s,
          x: s.careerInfluence,
          y: s.relationshipSupport,
        }));
    }
  };

  const getQuadrantLabel = (quadrant: number) => {
    switch (matrixView) {
      case "influence-support":
        switch (quadrant) {
          case 1:
            return "Key Champions";
          case 2:
            return "Cultivate Support";
          case 3:
            return "Monitor";
          case 4:
            return "Address Opposition";
          default:
            return "";
        }
      case "influence-difficulty":
        switch (quadrant) {
          case 1:
            return "High-Value Targets";
          case 2:
            return "Strategic Investment";
          case 3:
            return "Easy Wins";
          case 4:
            return "Low Priority";
          default:
            return "";
        }
      default:
        return "";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      internal: "#3b82f6",
      external: "#10b981",
      client: "#f59e0b",
      vendor: "#8b5cf6",
      government: "#ef4444",
      media: "#06b6d4",
      community: "#84cc16",
    };
    return colors[category as keyof typeof colors] || "#6b7280";
  };

  const handleDeleteStakeholder = (stakeholder: Stakeholder) => {
    setStakeholderToDelete(stakeholder);
  };

  // Delete function using Firebase
  const confirmDelete = async () => {
    if (!stakeholderToDelete) return;
    
    setIsSaving(true);
    try {
      await deleteStakeholder(stakeholderToDelete.id);
      setStakeholderToDelete(null);
      setSelectedStakeholder(null);
    } catch (error) {
      console.error('Error deleting stakeholder:', error);
      alert('Error deleting stakeholder. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditStakeholder = (stakeholder: Stakeholder) => {
    // Ensure we're using the actual Firebase document ID
    const actualStakeholder = stakeholders.find(s => s.id === stakeholder.id);
    if (actualStakeholder) {
      setSelectedStakeholder(actualStakeholder);
      setIsEditingStakeholder(true);
    } else {
      console.error('Stakeholder not found in current state:', stakeholder.id);
      alert('Error: Stakeholder data not synchronized. Please refresh and try again.');
    }
  };

  // Save function using Firebase with proper ID handling
  const handleSaveStakeholder = async (stakeholder: Stakeholder) => {
    if (!user) return;
    
    setIsSaving(true);
    try {
      if (isEditingStakeholder && selectedStakeholder) {
        // Use the actual Firebase document ID from the selected stakeholder
        await updateStakeholder(selectedStakeholder.id, stakeholder);
      } else {
        // For new stakeholders, remove any temporary ID
        const { id, ...stakeholderWithoutId } = stakeholder;
        await createStakeholder(user.uid, stakeholderWithoutId);
      }
      
      setIsAddingStakeholder(false);
      setIsEditingStakeholder(false);
      setSelectedStakeholder(null);
    } catch (error) {
      console.error('Error saving stakeholder:', error);
      alert('Error saving stakeholder. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelForm = () => {
    setIsAddingStakeholder(false);
    setIsEditingStakeholder(false);
    setSelectedStakeholder(null);
  };

  const getTypeIcon = (type: string) => {
    const iconMap = {
      power_broker: <Star className="w-4 h-4" />,
      decision_maker: <Target className="w-4 h-4" />,
      influencer: <TrendingUp className="w-4 h-4" />,
      gatekeeper: <Building className="w-4 h-4" />,
      champion: <Users className="w-4 h-4" />,
      analyst: <BarChart3 className="w-4 h-4" />,
      connector: <Network className="w-4 h-4" />,
    };
    return (
      iconMap[type as keyof typeof iconMap] || <User className="w-4 h-4" />
    );
  };

  const getTypeColor = (type: string) => {
    return (
      stakeholderTypeDefinitions[
        type as keyof typeof stakeholderTypeDefinitions
      ]?.color || "#6b7280"
    );
  };

  // Interactive Network Visualization Component
  const NetworkView = () => {
    const [dimensions] = useState({ width: 800, height: 600 });
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Create nodes and links data structure
    const networkData = useMemo(() => {
      const nodes = filteredStakeholders.map((stakeholder, index) => ({
        id: stakeholder.id,
        name: stakeholder.name,
        organization: stakeholder.organization,
        type: stakeholder.stakeholderType,
        careerInfluence: stakeholder.careerInfluence,
        relationshipSupport: stakeholder.relationshipSupport,
        engagementDifficulty: stakeholder.engagementDifficulty,
        category: stakeholder.category,
        relationship: stakeholder.relationship,
        x: 100 + (index % 4) * 150 + Math.random() * 50,
        y: 100 + Math.floor(index / 4) * 120 + Math.random() * 50,
      }));

      const links: any[] = [];
      filteredStakeholders.forEach(stakeholder => {
        stakeholder.connections.forEach(connectionId => {
          const targetNode = nodes.find(n => n.id === connectionId);
          if (targetNode) {
            links.push({
              source: stakeholder.id,
              target: connectionId,
              strength: Math.random() * 0.5 + 0.5 // Random strength for demo
            });
          }
        });
      });

      return { nodes, links };
    }, [filteredStakeholders]);

    // Simple force simulation using useEffect
    useEffect(() => {
      let animationId: number;
      const simulate = () => {
        // Simple force-directed positioning
        networkData.nodes.forEach((node, i) => {
          let fx = 0, fy = 0;
          
          // Repulsion between nodes
          networkData.nodes.forEach((other, j) => {
            if (i !== j) {
              const dx = node.x - other.x;
              const dy = node.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy) || 1;
              const force = 2000 / (distance * distance);
              fx += (dx / distance) * force;
              fy += (dy / distance) * force;
            }
          });

          // Attraction to center
          const centerX = dimensions.width / 2;
          const centerY = dimensions.height / 2;
          const toCenterX = (centerX - node.x) * 0.001;
          const toCenterY = (centerY - node.y) * 0.001;
          fx += toCenterX;
          fy += toCenterY;

          // Apply forces with damping
          node.x += fx * 0.1;
          node.y += fy * 0.1;

          // Boundary constraints
          node.x = Math.max(50, Math.min(dimensions.width - 50, node.x));
          node.y = Math.max(50, Math.min(dimensions.height - 50, node.y));
        });

        animationId = requestAnimationFrame(simulate);
      };

      const timer = setTimeout(() => {
        simulate();
        setTimeout(() => cancelAnimationFrame(animationId), 3000); // Stop after 3 seconds
      }, 100);

      return () => {
        clearTimeout(timer);
        if (animationId) cancelAnimationFrame(animationId);
      };
    }, [networkData, dimensions]);

    const getNodeRadius = (careerInfluence: number) => {
      return Math.max(8, careerInfluence * 3 + 10);
    };

    const getRelationshipColor = (relationship: string) => {
      switch (relationship) {
        case 'ally': return '#10b981';
        case 'opponent': return '#ef4444';
        case 'neutral': return '#6b7280';
        default: return '#f59e0b';
      }
    };

    const getLinkColor = (sourceNode: any, targetNode: any) => {
      if (sourceNode.relationship === 'ally' && targetNode.relationship === 'ally') {
        return '#10b981';
      }
      return '#94a3b8';
    };

    const networkStats = useMemo(() => {
      const totalConnections = networkData.links.length;
      const avgConnections = filteredStakeholders.length > 0 ? 
        (totalConnections * 2) / filteredStakeholders.length : 0;
      
      const mostConnected = filteredStakeholders.reduce((max, current) => 
        current.connections.length > max.connections.length ? current : max, 
        filteredStakeholders[0] || { name: 'N/A', connections: [] }
      );

      const influenceDistribution = filteredStakeholders.reduce((acc, s) => {
        const tier = s.careerInfluence >= 8 ? 'high' : s.careerInfluence >= 6 ? 'medium' : 'low';
        acc[tier] = (acc[tier] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      return {
        totalConnections,
        avgConnections: Math.round(avgConnections * 10) / 10,
        mostConnected: mostConnected.name,
        highInfluence: influenceDistribution.high || 0,
        clusters: Math.ceil(filteredStakeholders.length / 3) // Simplified cluster estimation
      };
    }, [filteredStakeholders, networkData]);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Network Visualization</h2>
          <div className="text-sm text-gray-600">
            {filteredStakeholders.length} nodes, {networkData.links.length} connections
          </div>
        </div>

        {/* Network Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{networkStats.totalConnections}</div>
            <div className="text-sm text-blue-700">Total Connections</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{networkStats.avgConnections}</div>
            <div className="text-sm text-green-700">Avg per Person</div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{networkStats.highInfluence}</div>
            <div className="text-sm text-purple-700">High Influence</div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{networkStats.clusters}</div>
            <div className="text-sm text-orange-700">Network Clusters</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>Ally</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <span>Neutral</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>Opponent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span>Unknown</span>
          </div>
          <div className="text-gray-600">
            • Node size = Career Influence • Click to select
          </div>
        </div>

        {/* SVG Network Diagram */}
        <div className="border rounded-lg bg-white overflow-hidden">
          <svg 
            width={dimensions.width} 
            height={dimensions.height}
            className="cursor-pointer"
          >
            {/* Background */}
            <rect width="100%" height="100%" fill="#fafafa" />
            
            {/* Grid lines for better visual structure */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Links */}
            {networkData.links.map((link, index) => {
              const sourceNode = networkData.nodes.find(n => n.id === link.source);
              const targetNode = networkData.nodes.find(n => n.id === link.target);
              if (!sourceNode || !targetNode) return null;

              return (
                <line
                  key={`link-${index}`}
                  x1={sourceNode.x}
                  y1={sourceNode.y}
                  x2={targetNode.x}
                  y2={targetNode.y}
                  stroke={getLinkColor(sourceNode, targetNode)}
                  strokeWidth={link.strength * 3}
                  strokeOpacity={0.6}
                />
              );
            })}

            {/* Nodes */}
            {networkData.nodes.map((node) => {
              const isSelected = selectedStakeholder?.id === node.id;
              const isHovered = hoveredNode === node.id;
              const radius = getNodeRadius(node.careerInfluence);
              
              return (
                <g key={node.id}>
                  {/* Node shadow */}
                  <circle
                    cx={node.x + 2}
                    cy={node.y + 2}
                    r={radius}
                    fill="rgba(0,0,0,0.1)"
                  />
                  
                  {/* Selection ring */}
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius + 5}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeDasharray="5,5"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from={`0 ${node.x} ${node.y}`}
                        to={`360 ${node.x} ${node.y}`}
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  
                  {/* Main node */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill={getRelationshipColor(node.relationship)}
                    stroke={getTypeColor(node.type)}
                    strokeWidth={isHovered ? 4 : 2}
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => setSelectedStakeholder(filteredStakeholders.find(s => s.id === node.id) || null)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      filter: isHovered ? 'brightness(1.1)' : 'none',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: `${node.x}px ${node.y}px`
                    }}
                  />

                  {/* Node label */}
                  <text
                    x={node.x}
                    y={node.y + radius + 15}
                    textAnchor="middle"
                    className="text-xs font-medium fill-gray-700 pointer-events-none"
                    style={{ maxWidth: '80px' }}
                  >
                    {node.name.split(' ')[0]}
                  </text>

                  {/* Career Influence indicator */}
                  <text
                    x={node.x}
                    y={node.y + 3}
                    textAnchor="middle"
                    className="text-xs font-bold fill-white pointer-events-none"
                  >
                    {node.careerInfluence}
                  </text>

                  {/* Hover tooltip */}
                  {isHovered && (
                    <g>
                      <rect
                        x={node.x - 60}
                        y={node.y - radius - 40}
                        width="120"
                        height="30"
                        fill="rgba(0,0,0,0.8)"
                        rx="4"
                        className="pointer-events-none"
                      />
                      <text
                        x={node.x}
                        y={node.y - radius - 30}
                        textAnchor="middle"
                        className="text-xs font-medium fill-white pointer-events-none"
                      >
                        {node.name}
                      </text>
                      <text
                        x={node.x}
                        y={node.y - radius - 18}
                        textAnchor="middle"
                        className="text-xs fill-gray-300 pointer-events-none"
                      >
                        {node.organization}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Network Insights */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Network Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Most Connected:</strong> {networkStats.mostConnected}
              <div className="text-gray-600">
                Hub with {filteredStakeholders.find(s => s.name === networkStats.mostConnected)?.connections.length || 0} direct connections
              </div>
            </div>
            <div>
              <strong>Network Density:</strong> {Math.round((networkStats.totalConnections / (filteredStakeholders.length * (filteredStakeholders.length - 1) / 2)) * 100)}%
              <div className="text-gray-600">
                Measures how interconnected your network is
              </div>
            </div>
            <div>
              <strong>Key Relationship Types:</strong>
              <div className="text-gray-600">
                {filteredStakeholders.filter(s => s.relationship === 'ally').length} allies, {' '}
                {filteredStakeholders.filter(s => s.relationship === 'neutral').length} neutral, {' '}
                {filteredStakeholders.filter(s => s.relationship === 'opponent').length} opponents
              </div>
            </div>
            <div>
              <strong>High-Influence Contacts:</strong>
              <div className="text-gray-600">
                {networkStats.highInfluence} stakeholders with 8+ career influence
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MetricSlider = ({ 
    label, 
    value, 
    onChange, 
    metricKey 
  }: { 
    label: string; 
    value: number; 
    onChange: (value: number) => void; 
    metricKey: keyof typeof metricDefinitions;
  }) => {
    const [showHelp, setShowHelp] = useState(false);
    const metric = metricDefinitions[metricKey];

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <label className="block text-sm font-medium">{label}</label>
            <button
              type="button"
              onMouseEnter={() => setShowHelp(true)}
              onMouseLeave={() => setShowHelp(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>
          <span className="text-sm font-medium text-gray-700">{value}/10</span>
        </div>
        
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        
        <div className="flex justify-between text-xs text-gray-500">
          <span>1</span>
          <span>5</span>
          <span>10</span>
        </div>

        {showHelp && (
          <div className="absolute z-10 p-3 bg-white border rounded-lg shadow-lg max-w-xs">
            <p className="text-sm font-medium mb-2">{metric.description}</p>
            <div className="text-xs text-gray-600 space-y-1">
              <div><strong>1-3:</strong> {metric.scale.low}</div>
              <div><strong>4-7:</strong> {metric.scale.medium}</div>
              <div><strong>8-10:</strong> {metric.scale.high}</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const StakeholderForm = ({
    stakeholder,
    onSave,
    onCancel,
  }: {
    stakeholder?: Stakeholder;
    onSave: (stakeholder: Stakeholder) => void;
    onCancel: () => void;
  }) => {
    const [formData, setFormData] = useState<Partial<Stakeholder>>(
      stakeholder || {
        name: "",
        organization: "",
        position: "",
        email: "",
        phone: "",
        careerInfluence: 5,
        relationshipSupport: 5,
        engagementDifficulty: 5,
        relationship: "neutral",
        category: "external",
        stakeholderType: "influencer",
        engagementFrequency: "monthly",
        lastContact: "",
        coreInterests: [],
        potentialOutcomes: [],
        notes: "",
        location: "",
        connections: [],
      }
    );

    const handleSubmit = () => {
      const newStakeholder: Stakeholder = {
        ...formData,
        // For new stakeholders, don't include an ID - let Firebase generate it
        // For existing stakeholders, preserve the original ID
        id: stakeholder?.id || '',
        name: formData.name || "",
        organization: formData.organization || "",
        position: formData.position || "",
        email: formData.email || "",
        phone: formData.phone || "",
        careerInfluence: formData.careerInfluence || 5,
        relationshipSupport: formData.relationshipSupport || 5,
        engagementDifficulty: formData.engagementDifficulty || 5,
        relationship: formData.relationship || "neutral",
        category: formData.category || "external",
        stakeholderType: formData.stakeholderType || "influencer",
        engagementFrequency: formData.engagementFrequency || "monthly",
        lastContact: formData.lastContact || "",
        coreInterests: formData.coreInterests || [],
        potentialOutcomes: formData.potentialOutcomes || [],
        notes: formData.notes || "",
        location: formData.location || "",
        connections: formData.connections || [],
      };
      onSave(newStakeholder);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-6">
            {stakeholder ? "Edit Stakeholder" : "Add New Stakeholder"}
          </h3>

          <div className="space-y-6">
            {/* Basic Information */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-800">Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    value={formData.name || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.organization || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    value={formData.position || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Classification */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-800">Classification</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category || "external"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="internal">Internal</option>
                    <option value="external">External</option>
                    <option value="client">Client</option>
                    <option value="vendor">Vendor</option>
                    <option value="government">Government</option>
                    <option value="media">Media</option>
                    <option value="community">Community</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium">
                      Stakeholder Type
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowTypeGuide(true)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View Guide</span>
                    </button>
                  </div>
                  <select
                    value={formData.stakeholderType || "influencer"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stakeholderType: e.target.value as any,
                      })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Object.entries(stakeholderTypeDefinitions).map(
                      ([key, def]) => (
                        <option key={key} value={key}>
                          {def.title}
                        </option>
                      )
                    )}
                  </select>
                  {formData.stakeholderType && (
                    <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm">
                      <p className="text-gray-700">
                        <strong>
                          {
                            stakeholderTypeDefinitions[
                              formData.stakeholderType as keyof typeof stakeholderTypeDefinitions
                            ]?.title
                          }:
                        </strong>{" "}
                        {
                          stakeholderTypeDefinitions[
                            formData.stakeholderType as keyof typeof stakeholderTypeDefinitions
                          ]?.description
                        }
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Relationship
                  </label>
                  <select
                    value={formData.relationship || "neutral"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        relationship: e.target.value as any,
                      })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ally">Ally</option>
                    <option value="neutral">Neutral</option>
                    <option value="opponent">Opponent</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Engagement Frequency
                  </label>
                  <select
                    value={formData.engagementFrequency || "monthly"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        engagementFrequency: e.target.value as any,
                      })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annually">Annually</option>
                    <option value="as_needed">As Needed</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Last Contact
                  </label>
                  <input
                    type="date"
                    value={formData.lastContact || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, lastContact: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Career Impact Metrics */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-800">Career Impact Assessment</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                <MetricSlider
                  label="Career Influence"
                  value={formData.careerInfluence || 5}
                  onChange={(value) => setFormData({ ...formData, careerInfluence: value })}
                  metricKey="careerInfluence"
                />
                <MetricSlider
                  label="Relationship Support"
                  value={formData.relationshipSupport || 5}
                  onChange={(value) => setFormData({ ...formData, relationshipSupport: value })}
                  metricKey="relationshipSupport"
                />
                <MetricSlider
                  label="Engagement Difficulty"
                  value={formData.engagementDifficulty || 5}
                  onChange={(value) => setFormData({ ...formData, engagementDifficulty: value })}
                  metricKey="engagementDifficulty"
                />
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-gray-800">Additional Details</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Core Interests
                  </label>
                  <input
                    type="text"
                    value={formData.coreInterests?.join(", ") || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        coreInterests: e.target.value
                          .split(",")
                          .map((s) => s.trim()),
                      })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Innovation, Leadership, Growth"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate multiple interests with commas</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Potential Outcomes
                  </label>
                  <input
                    type="text"
                    value={formData.potentialOutcomes?.join(", ") || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        potentialOutcomes: e.target.value
                          .split(",")
                          .map((s) => s.trim()),
                      })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Job opportunities, Mentorship, Referrals"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate multiple outcomes with commas</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Notes</label>
                  <textarea
                    value={formData.notes || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Additional notes about this stakeholder..."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-6 border-t">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSaving}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{isSaving ? 'Saving...' : stakeholder ? 'Update' : 'Add'} Stakeholder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StakeholderDetails = ({
    stakeholder,
  }: {
    stakeholder: Stakeholder;
  }) => {
    const connections = stakeholders.filter((s) =>
      stakeholder.connections.includes(s.id)
    );

    return (
      <div className="bg-white rounded-lg border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div
              className="p-3 rounded-lg"
              style={{
                backgroundColor:
                  getTypeColor(stakeholder.stakeholderType) + "20",
              }}
            >
              {getTypeIcon(stakeholder.stakeholderType)}
            </div>
            <div>
              <h3 className="font-semibold text-xl">{stakeholder.name}</h3>
              <p className="text-gray-600 text-lg">
                {stakeholder.position} at {stakeholder.organization}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{
                    backgroundColor: getTypeColor(stakeholder.stakeholderType),
                  }}
                >
                  {
                    stakeholderTypeDefinitions[
                      stakeholder.stakeholderType as keyof typeof stakeholderTypeDefinitions
                    ]?.title
                  }
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    stakeholder.relationship === "ally"
                      ? "bg-green-100 text-green-800"
                      : stakeholder.relationship === "neutral"
                      ? "bg-gray-100 text-gray-800"
                      : stakeholder.relationship === "opponent"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {stakeholder.relationship.charAt(0).toUpperCase() +
                    stakeholder.relationship.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleEditStakeholder(stakeholder)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleDeleteStakeholder(stakeholder)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-600">Email:</span>{" "}
                <span className="font-medium">{stakeholder.email}</span>
              </p>
              <p>
                <span className="text-gray-600">Phone:</span>{" "}
                <span className="font-medium">{stakeholder.phone}</span>
              </p>
              <p>
                <span className="text-gray-600">Location:</span>{" "}
                <span className="font-medium">{stakeholder.location}</span>
              </p>
              <p>
                <span className="text-gray-600">Last Contact:</span>{" "}
                <span className="font-medium">{stakeholder.lastContact}</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Career Impact Metrics</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Career Influence:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(stakeholder.careerInfluence / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{stakeholder.careerInfluence}/10</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Relationship Support:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(stakeholder.relationshipSupport / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{stakeholder.relationshipSupport}/10</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Engagement Difficulty:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full" 
                      style={{ width: `${(stakeholder.engagementDifficulty / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{stakeholder.engagementDifficulty}/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3 text-gray-800">Stakeholder Type</h4>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>
                {
                  stakeholderTypeDefinitions[
                    stakeholder.stakeholderType as keyof typeof stakeholderTypeDefinitions
                  ]?.title
                }:
              </strong>{" "}
              {
                stakeholderTypeDefinitions[
                  stakeholder.stakeholderType as keyof typeof stakeholderTypeDefinitions
                ]?.description
              }
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3 text-gray-800">Core Interests</h4>
          <div className="flex flex-wrap gap-2">
            {stakeholder.coreInterests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-3 text-gray-800">Potential Outcomes</h4>
          <div className="flex flex-wrap gap-2">
            {stakeholder.potentialOutcomes.map((outcome, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>

        {connections.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-gray-800">Connected Stakeholders</h4>
            <div className="flex flex-wrap gap-2">
              {connections.map((connection) => (
                <span
                  key={connection.id}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm cursor-pointer hover:bg-gray-200"
                  onClick={() => setSelectedStakeholder(connection)}
                >
                  {connection.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {stakeholder.notes && (
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-gray-800">Notes</h4>
            <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">{stakeholder.notes}</p>
          </div>
        )}
      </div>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{data.name}</p>
          <p className="text-sm text-gray-600">{data.organization}</p>
          <p className="text-sm">
            {matrixView === "influence-support" &&
              `Career Influence: ${data.careerInfluence}, Support: ${data.relationshipSupport}`}
            {matrixView === "influence-difficulty" &&
              `Career Influence: ${data.careerInfluence}, Difficulty: ${data.engagementDifficulty}`}
          </p>
        </div>
      );
    }
    return null;
  };

  const StakeholderTypeGuide = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Stakeholder Type Guide</h2>
            <button
              onClick={() => setShowTypeGuide(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(stakeholderTypeDefinitions).map(
              ([key, definition]) => (
                <div key={key} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className="p-2 rounded-lg text-white font-bold"
                      style={{ backgroundColor: definition.color }}
                    >
                      {definition.icon}
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: definition.color }}
                    >
                      {definition.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-3">{definition.description}</p>

                  <div className="mb-3">
                    <h4 className="font-medium text-sm text-gray-800 mb-2">
                      Key Characteristics:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {definition.characteristics.map((char, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-gray-800 mb-2">
                      Examples:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {definition.examples.map((example, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 rounded text-xs text-white"
                          style={{ backgroundColor: definition.color }}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              Pro Tips for Career Success:
            </h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                • <strong>Power Brokers:</strong> Cultivate these relationships
                early - they can open unexpected doors
              </li>
              <li>
                • <strong>Decision Makers:</strong> Understand their priorities
                and align your value proposition accordingly
              </li>
              <li>
                • <strong>Champions:</strong> Keep them informed of your wins so
                they can advocate effectively
              </li>
              <li>
                • <strong>Gatekeepers:</strong> Build genuine relationships -
                they often have more influence than apparent
              </li>
              <li>
                • <strong>Connectors:</strong> Offer value first before asking
                for introductions
              </li>
            </ul>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={() => setShowTypeGuide(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Got It!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {loading ? (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">Loading your stakeholder data...</p>
          </div>
        </div>
      ) : (
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Career Stakeholder Matrix
          </h1>
          <p className="text-gray-600">
            Map and analyze your professional relationships to accelerate career
            growth
          </p>
          {/* Connection Status Indicator */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Connected to Firebase</span>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg border p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search stakeholders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded-md px-3 py-2 w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="internal">Internal</option>
              <option value="external">External</option>
              <option value="client">Client</option>
              <option value="vendor">Vendor</option>
              <option value="government">Government</option>
              <option value="media">Media</option>
              <option value="community">Community</option>
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="power_broker">Power Brokers</option>
              <option value="decision_maker">Decision Makers</option>
              <option value="influencer">Influencers</option>
              <option value="gatekeeper">Gatekeepers</option>
              <option value="champion">Champions</option>
              <option value="analyst">Analysts</option>
              <option value="connector">Connectors</option>
            </select>

            <div className="flex border rounded-md">
              <button
                onClick={() => setViewMode("matrix")}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === "matrix"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Matrix View
              </button>
              <button
                onClick={() => setViewMode("network")}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === "network"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Network View
              </button>
              <button
                onClick={() => setViewMode("analytics")}
                className={`px-4 py-2 text-sm font-medium ${
                  viewMode === "analytics"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Analytics
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAddingStakeholder(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Stakeholder</span>
              </button>

              <button
                onClick={() => setShowTypeGuide(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-2 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Type Guide</span>
              </button>
            </div>
          </div>

          {/* Quick Access Help Banner */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              💡 <strong>New to stakeholder mapping?</strong> Click the{" "}
              <button
                onClick={() => setShowTypeGuide(true)}
                className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium underline"
              >
                <Eye className="w-3 h-3" />
                <span>Type Guide</span>
              </button>{" "}
              to learn about the 7 stakeholder types and how to categorize your
              professional relationships effectively.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visualization Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border p-6">
              {viewMode === "matrix" && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">
                      Stakeholder Matrix
                    </h2>
                    <select
                      value={matrixView}
                      onChange={(e) => setMatrixView(e.target.value as any)}
                      className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="influence-support">
                        Career Influence vs Support
                      </option>
                      <option value="influence-difficulty">
                        Career Influence vs Engagement Difficulty
                      </option>
                    </select>
                  </div>

                  <div className="h-96 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          type="number"
                          dataKey="x"
                          domain={[0, 11]}
                          name={matrixView === "influence-support" ? "Career Influence" : "Career Influence"}
                          ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        />
                        <YAxis
                          type="number"
                          dataKey="y"
                          domain={[0, 11]}
                          name={matrixView === "influence-support" ? "Relationship Support" : "Engagement Difficulty"}
                          ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Scatter data={getMatrixData()}>
                          {getMatrixData().map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={getCategoryColor(entry.category)}
                            />
                          ))}
                        </Scatter>
                      </ScatterChart>
                    </ResponsiveContainer>

                    {/* Quadrant Labels */}
                    <div className="absolute top-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                      {getQuadrantLabel(1)}
                    </div>
                    <div className="absolute top-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                      {getQuadrantLabel(2)}
                    </div>
                    <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                      {getQuadrantLabel(4)}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                      {getQuadrantLabel(3)}
                    </div>
                  </div>
                </>
              )}

              {viewMode === "analytics" && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold">
                    Stakeholder Analytics
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">
                        Distribution by Category
                      </h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={Object.entries(
                                filteredStakeholders.reduce((acc, s) => {
                                  acc[s.category] = (acc[s.category] || 0) + 1;
                                  return acc;
                                }, {} as Record<string, number>)
                              ).map(([key, value]) => ({ name: key, value }))}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                              }
                            >
                              {Object.keys(
                                filteredStakeholders.reduce((acc, s) => {
                                  acc[s.category] = (acc[s.category] || 0) + 1;
                                  return acc;
                                }, {} as Record<string, number>)
                              ).map((category, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={getCategoryColor(category)}
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">
                        Average Career Influence by Type
                      </h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={Object.entries(
                              filteredStakeholders.reduce((acc, s) => {
                                if (!acc[s.stakeholderType]) {
                                  acc[s.stakeholderType] = {
                                    total: 0,
                                    count: 0,
                                  };
                                }
                                acc[s.stakeholderType].total += s.careerInfluence;
                                acc[s.stakeholderType].count += 1;
                                return acc;
                              }, {} as Record<string, { total: number; count: number }>)
                            ).map(([key, value]) => ({
                              name: key.replace("_", " "),
                              value: Math.round(value.total / value.count),
                            }))}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#3b82f6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {viewMode === "network" && <NetworkView />}
            </div>
          </div>

          {/* Stakeholder List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Stakeholders ({filteredStakeholders.length})
              </h2>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-medium mb-3">Key Insights</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Power Brokers:</span>
                  <span className="font-medium ml-2">
                    {
                      filteredStakeholders.filter(
                        (s) => s.stakeholderType === "power_broker"
                      ).length
                    }
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">High Influence:</span>
                  <span className="font-medium ml-2">
                    {
                      filteredStakeholders.filter((s) => s.careerInfluence >= 8)
                        .length
                    }
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Strong Support:</span>
                  <span className="font-medium ml-2">
                    {
                      filteredStakeholders.filter(
                        (s) => s.relationshipSupport >= 8
                      ).length
                    }
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Needs Attention:</span>
                  <span className="font-medium ml-2">
                    {
                      filteredStakeholders.filter(
                        (s) => s.careerInfluence >= 7 && s.relationshipSupport <= 6
                      ).length
                    }
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredStakeholders.map((stakeholder) => (
                <div
                  key={stakeholder.id}
                  className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedStakeholder(stakeholder)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor:
                            getTypeColor(stakeholder.stakeholderType) + "20",
                        }}
                      >
                        {getTypeIcon(stakeholder.stakeholderType)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{stakeholder.name}</h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-gray-600">
                            {stakeholder.organization}
                          </p>
                          <span
                            className="px-2 py-1 rounded text-xs font-medium text-white"
                            style={{
                              backgroundColor: getTypeColor(
                                stakeholder.stakeholderType
                              ),
                            }}
                          >
                            {
                              stakeholderTypeDefinitions[
                                stakeholder.stakeholderType as keyof typeof stakeholderTypeDefinitions
                              ]?.title
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right text-sm">
                        <div className="text-gray-600">
                          Influence: {stakeholder.careerInfluence}/10
                        </div>
                        <div className="text-gray-600">
                          Support: {stakeholder.relationshipSupport}/10
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditStakeholder(stakeholder);
                        }}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                        title="Edit stakeholder"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {stakeholder.coreInterests
                      .slice(0, 3)
                      .map((interest, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    {stakeholder.coreInterests.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{stakeholder.coreInterests.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stakeholder Details Modal */}
        {selectedStakeholder &&
          !isAddingStakeholder &&
          !isEditingStakeholder && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Stakeholder Details</h2>
                  <button
                    onClick={() => setSelectedStakeholder(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <StakeholderDetails stakeholder={selectedStakeholder} />
              </div>
            </div>
          )}

        {/* Add/Edit Stakeholder Form */}
        {(isAddingStakeholder || isEditingStakeholder) && (
          <StakeholderForm
            stakeholder={
              isEditingStakeholder
                ? selectedStakeholder || undefined
                : undefined
            }
            onSave={handleSaveStakeholder}
            onCancel={handleCancelForm}
          />
        )}

        {/* Stakeholder Type Guide */}
        {showTypeGuide && <StakeholderTypeGuide />}

        {/* Delete Confirmation Dialog */}
        {stakeholderToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete{" "}
                <strong>{stakeholderToDelete.name}</strong>? This action cannot
                be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setStakeholderToDelete(null)}
                  className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isSaving}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{isSaving ? 'Deleting...' : 'Delete Stakeholder'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )}
    </div>
  );
};

export default CareerStakeholderMatrix;