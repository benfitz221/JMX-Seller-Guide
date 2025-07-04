(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/CareerStakeholderMatrix.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/ScatterChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Scatter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
};
const CareerStakeholderMatrix = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    const [stakeholders, setStakeholders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedStakeholder, setSelectedStakeholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddingStakeholder, setIsAddingStakeholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditingStakeholder, setIsEditingStakeholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stakeholderToDelete, setStakeholderToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showTypeGuide, setShowTypeGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("matrix");
    const [matrixView, setMatrixView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("influence-support");
    // Stakeholder type definitions for career planning
    const stakeholderTypeDefinitions = {
        power_broker: {
            title: "Power Broker",
            description: "Individuals with significant influence who can broker deals, open doors, and make strategic introductions. They often operate behind the scenes and have extensive networks.",
            characteristics: [
                "Extensive network connections",
                "Ability to influence key decisions",
                "Often consulted by senior leadership",
                "Can facilitate introductions and opportunities"
            ],
            examples: [
                "Senior executives",
                "Board members",
                "Industry veterans",
                "Well-connected consultants"
            ],
            icon: "⭐",
            color: "#f59e0b"
        },
        decision_maker: {
            title: "Decision Maker",
            description: "People with direct authority to make hiring, promotion, budget, or strategic decisions that directly impact your career trajectory.",
            characteristics: [
                "Direct decision-making authority",
                "Budget control",
                "Hiring/promotion power",
                "Strategic planning involvement"
            ],
            examples: [
                "Your boss",
                "VP/Director level",
                "CEO/C-suite",
                "Department heads"
            ],
            icon: "🎯",
            color: "#ef4444"
        },
        influencer: {
            title: "Influencer",
            description: "Respected professionals whose opinions carry weight. They may not have formal authority but their recommendations and endorsements significantly impact decisions.",
            characteristics: [
                "Industry reputation",
                "Thought leadership",
                "Respected expertise",
                "Strong professional brand"
            ],
            examples: [
                "Industry experts",
                "Conference speakers",
                "Published authors",
                "Award winners"
            ],
            icon: "📈",
            color: "#8b5cf6"
        },
        gatekeeper: {
            title: "Gatekeeper",
            description: "Individuals who control access to opportunities, information, or key people. They often filter who gets through to decision makers.",
            characteristics: [
                "Controls access to resources",
                "Information filtering role",
                "Relationship with decision makers",
                "Process ownership"
            ],
            examples: [
                "Executive assistants",
                "HR managers",
                "Recruiters",
                "Project managers"
            ],
            icon: "🏢",
            color: "#06b6d4"
        },
        champion: {
            title: "Champion",
            description: "Strong advocates who actively promote your interests, speak positively about your work, and support your career advancement.",
            characteristics: [
                "Active advocacy",
                "Positive reputation building",
                "Willing to recommend",
                "Invested in your success"
            ],
            examples: [
                "Mentors",
                "Supportive colleagues",
                "Former managers",
                "Satisfied clients"
            ],
            icon: "👥",
            color: "#10b981"
        },
        analyst: {
            title: "Analyst",
            description: "Individuals who evaluate performance, assess capabilities, or provide technical expertise that influences career-related decisions.",
            characteristics: [
                "Technical evaluation role",
                "Performance assessment",
                "Subject matter expertise",
                "Advisory capacity"
            ],
            examples: [
                "Technical reviewers",
                "Performance evaluators",
                "Consultants",
                "Peer reviewers"
            ],
            icon: "📊",
            color: "#6366f1"
        },
        connector: {
            title: "Connector",
            description: "Well-networked individuals who excel at making introductions and connecting people across industries, organizations, or functional areas.",
            characteristics: [
                "Extensive professional network",
                "Relationship building skills",
                "Cross-industry connections",
                "Introduction facilitation"
            ],
            examples: [
                "Industry association leaders",
                "Conference organizers",
                "Alumni network leaders",
                "Professional group heads"
            ],
            icon: "🔗",
            color: "#84cc16"
        }
    };
    // Sample data - Energy sector stakeholders relevant to Dr. Veda's career
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CareerStakeholderMatrix.useEffect": ()=>{
            const sampleStakeholders = [
                {
                    id: "1",
                    name: "Jennifer Martinez",
                    organization: "Dominion Energy",
                    position: "VP Grid Technology",
                    email: "jennifer.martinez@dominionenergy.com",
                    phone: "804-555-0123",
                    careerInfluence: 10,
                    relationshipSupport: 8,
                    engagementDifficulty: 3,
                    relationship: "ally",
                    category: "internal",
                    stakeholderType: "power_broker",
                    engagementFrequency: "weekly",
                    lastContact: "2024-06-18",
                    coreInterests: [
                        "Grid modernization",
                        "DERMS implementation",
                        "Technology innovation",
                        "Regulatory compliance"
                    ],
                    potentialOutcomes: [
                        "Budget approval",
                        "Team expansion",
                        "Strategic project leadership",
                        "Promotion opportunities"
                    ],
                    notes: "Direct sponsor and key advocate. Strong supporter of DERMS and cloud-based solutions. Critical for career advancement.",
                    location: "Richmond, VA",
                    connections: [
                        "2",
                        "5"
                    ]
                },
                {
                    id: "2",
                    name: "Dr. Michael Chen",
                    organization: "U.S. Department of Energy",
                    position: "Director, Grid Modernization Office",
                    email: "michael.chen@doe.gov",
                    phone: "202-555-0456",
                    careerInfluence: 9,
                    relationshipSupport: 9,
                    engagementDifficulty: 7,
                    relationship: "ally",
                    category: "government",
                    stakeholderType: "decision_maker",
                    engagementFrequency: "quarterly",
                    lastContact: "2024-05-15",
                    coreInterests: [
                        "Grid modernization",
                        "Clean energy integration",
                        "Research funding",
                        "National energy security"
                    ],
                    potentialOutcomes: [
                        "Future DOE funding",
                        "Industry recognition",
                        "Policy influence",
                        "Advisory roles"
                    ],
                    notes: "Awarded $16.8M for GRID-FLEXER project. Key relationship for federal funding and energy policy influence.",
                    location: "Washington, DC",
                    connections: [
                        "1",
                        "3",
                        "4"
                    ]
                },
                {
                    id: "3",
                    name: "Sarah Kim",
                    organization: "NVIDIA Corporation",
                    position: "Director, Energy Sector Solutions",
                    email: "sarah.kim@nvidia.com",
                    phone: "408-555-0789",
                    careerInfluence: 8,
                    relationshipSupport: 7,
                    engagementDifficulty: 5,
                    relationship: "ally",
                    category: "external",
                    stakeholderType: "connector",
                    engagementFrequency: "monthly",
                    lastContact: "2024-06-01",
                    coreInterests: [
                        "AI in energy",
                        "Grid computing",
                        "Technology partnerships",
                        "Market expansion"
                    ],
                    potentialOutcomes: [
                        "Technology partnerships",
                        "Industry opportunities",
                        "Thought leadership",
                        "Executive roles"
                    ],
                    notes: "Connected through NREL Utilidata partnership. Strong industry advocate who offered competitive package.",
                    location: "Santa Clara, CA",
                    connections: [
                        "2",
                        "4",
                        "6"
                    ]
                },
                {
                    id: "4",
                    name: "Josh Walker",
                    organization: "Utilidata Inc.",
                    position: "CEO & Co-Founder",
                    email: "josh.walker@utilidata.com",
                    phone: "401-555-0321",
                    careerInfluence: 7,
                    relationshipSupport: 9,
                    engagementDifficulty: 4,
                    relationship: "ally",
                    category: "external",
                    stakeholderType: "influencer",
                    engagementFrequency: "monthly",
                    lastContact: "2024-05-28",
                    coreInterests: [
                        "Smart grid technology",
                        "DER integration",
                        "Utility partnerships",
                        "Innovation scaling"
                    ],
                    potentialOutcomes: [
                        "Advisory positions",
                        "Technology insights",
                        "Startup connections",
                        "Industry credibility"
                    ],
                    notes: "Facilitated NVIDIA partnership at NREL. Values expertise in utility needs and technology validation.",
                    location: "Providence, RI",
                    connections: [
                        "2",
                        "3",
                        "7"
                    ]
                },
                {
                    id: "5",
                    name: "Robert Thompson",
                    organization: "Dominion Energy",
                    position: "VP Grid Operations",
                    email: "robert.thompson@dominionenergy.com",
                    phone: "804-555-0654",
                    careerInfluence: 9,
                    relationshipSupport: 6,
                    engagementDifficulty: 7,
                    relationship: "neutral",
                    category: "internal",
                    stakeholderType: "decision_maker",
                    engagementFrequency: "monthly",
                    lastContact: "2024-06-10",
                    coreInterests: [
                        "Grid reliability",
                        "Operational efficiency",
                        "Technology integration",
                        "Risk management"
                    ],
                    potentialOutcomes: [
                        "Operational support",
                        "Cross-functional collaboration",
                        "Technology adoption",
                        "Executive visibility"
                    ],
                    notes: "Key stakeholder for DERMS operations. Initially skeptical of cloud solutions but warming to benefits.",
                    location: "Richmond, VA",
                    connections: [
                        "1",
                        "8"
                    ]
                },
                {
                    id: "6",
                    name: "Dr. Amanda Foster",
                    organization: "National Renewable Energy Laboratory",
                    position: "Group Manager, Grid Integration",
                    email: "amanda.foster@nrel.gov",
                    phone: "303-555-0987",
                    careerInfluence: 6,
                    relationshipSupport: 9,
                    engagementDifficulty: 3,
                    relationship: "ally",
                    category: "external",
                    stakeholderType: "champion",
                    engagementFrequency: "quarterly",
                    lastContact: "2024-04-20",
                    coreInterests: [
                        "Grid research",
                        "Technology validation",
                        "Industry collaboration",
                        "Knowledge transfer"
                    ],
                    potentialOutcomes: [
                        "Research partnerships",
                        "Academic credibility",
                        "Industry publications",
                        "Conference speaking"
                    ],
                    notes: "Former colleague who provides ongoing research insights and industry connections.",
                    location: "Golden, CO",
                    connections: [
                        "2",
                        "3",
                        "4"
                    ]
                },
                {
                    id: "7",
                    name: "Maria Rodriguez",
                    organization: "Virginia State Corporation Commission",
                    position: "Director, Energy Regulation",
                    email: "maria.rodriguez@scc.virginia.gov",
                    phone: "804-555-0246",
                    careerInfluence: 8,
                    relationshipSupport: 5,
                    engagementDifficulty: 8,
                    relationship: "neutral",
                    category: "government",
                    stakeholderType: "gatekeeper",
                    engagementFrequency: "as_needed",
                    lastContact: "2024-03-15",
                    coreInterests: [
                        "Regulatory compliance",
                        "Consumer protection",
                        "Grid modernization",
                        "Rate justification"
                    ],
                    potentialOutcomes: [
                        "Regulatory approval",
                        "Policy influence",
                        "Industry reputation",
                        "Compliance guidance"
                    ],
                    notes: "Critical for DERMS regulatory approval. Relationship needs strengthening for future initiatives.",
                    location: "Richmond, VA",
                    connections: [
                        "1",
                        "5"
                    ]
                },
                {
                    id: "8",
                    name: "David Park",
                    organization: "Dominion Energy",
                    position: "General Manager, Customer Programs",
                    email: "david.park@dominionenergy.com",
                    phone: "804-555-0135",
                    careerInfluence: 7,
                    relationshipSupport: 8,
                    engagementDifficulty: 4,
                    relationship: "ally",
                    category: "internal",
                    stakeholderType: "decision_maker",
                    engagementFrequency: "monthly",
                    lastContact: "2024-06-12",
                    coreInterests: [
                        "Customer engagement",
                        "DER adoption",
                        "Program effectiveness",
                        "Technology integration"
                    ],
                    potentialOutcomes: [
                        "Program collaboration",
                        "Customer insights",
                        "Technology deployment",
                        "Executive support"
                    ],
                    notes: "Strong collaborator on customer-facing DER programs. Appreciates technology expertise and practical solutions.",
                    location: "Richmond, VA",
                    connections: [
                        "1",
                        "5"
                    ]
                }
            ];
            setStakeholders(sampleStakeholders);
        }
    }["CareerStakeholderMatrix.useEffect"], []);
    const filteredStakeholders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CareerStakeholderMatrix.useMemo[filteredStakeholders]": ()=>{
            return stakeholders.filter({
                "CareerStakeholderMatrix.useMemo[filteredStakeholders]": (stakeholder)=>{
                    const matchesSearch = stakeholder.name.toLowerCase().includes(searchTerm.toLowerCase()) || stakeholder.organization.toLowerCase().includes(searchTerm.toLowerCase()) || stakeholder.position.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesCategory = filterCategory === "all" || stakeholder.category === filterCategory;
                    const matchesType = filterType === "all" || stakeholder.stakeholderType === filterType;
                    return matchesSearch && matchesCategory && matchesType;
                }
            }["CareerStakeholderMatrix.useMemo[filteredStakeholders]"]);
        }
    }["CareerStakeholderMatrix.useMemo[filteredStakeholders]"], [
        stakeholders,
        searchTerm,
        filterCategory,
        filterType
    ]);
    const getMatrixData = ()=>{
        switch(matrixView){
            case "influence-support":
                return filteredStakeholders.map((s)=>({
                        ...s,
                        x: s.careerInfluence,
                        y: s.relationshipSupport
                    }));
            case "influence-difficulty":
                return filteredStakeholders.map((s)=>({
                        ...s,
                        x: s.careerInfluence,
                        y: s.engagementDifficulty
                    }));
            default:
                return filteredStakeholders.map((s)=>({
                        ...s,
                        x: s.careerInfluence,
                        y: s.relationshipSupport
                    }));
        }
    };
    const getQuadrantLabel = (quadrant)=>{
        switch(matrixView){
            case "influence-support":
                switch(quadrant){
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
                switch(quadrant){
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
    const getCategoryColor = (category)=>{
        const colors = {
            internal: "#3b82f6",
            external: "#10b981",
            client: "#f59e0b",
            vendor: "#8b5cf6",
            government: "#ef4444",
            media: "#06b6d4",
            community: "#84cc16"
        };
        return colors[category] || "#6b7280";
    };
    const handleDeleteStakeholder = (stakeholder)=>{
        setStakeholderToDelete(stakeholder);
    };
    const confirmDelete = ()=>{
        if (stakeholderToDelete) {
            setStakeholders((prev)=>prev.filter((s)=>s.id !== stakeholderToDelete.id));
            setStakeholderToDelete(null);
            setSelectedStakeholder(null);
        }
    };
    const handleEditStakeholder = (stakeholder)=>{
        setSelectedStakeholder(stakeholder);
        setIsEditingStakeholder(true);
    };
    const handleSaveStakeholder = (stakeholder)=>{
        if (isEditingStakeholder) {
            setStakeholders((prev)=>prev.map((s)=>s.id === stakeholder.id ? stakeholder : s));
        } else {
            setStakeholders((prev)=>[
                    ...prev,
                    stakeholder
                ]);
        }
        setIsAddingStakeholder(false);
        setIsEditingStakeholder(false);
        setSelectedStakeholder(null);
    };
    const handleCancelForm = ()=>{
        setIsAddingStakeholder(false);
        setIsEditingStakeholder(false);
        setSelectedStakeholder(null);
    };
    const getTypeIcon = (type)=>{
        const iconMap = {
            power_broker: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 657,
                columnNumber: 21
            }, this),
            decision_maker: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 658,
                columnNumber: 23
            }, this),
            influencer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 659,
                columnNumber: 19
            }, this),
            gatekeeper: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 660,
                columnNumber: 19
            }, this),
            champion: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 661,
                columnNumber: 17
            }, this),
            analyst: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 662,
                columnNumber: 16
            }, this),
            connector: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 663,
                columnNumber: 18
            }, this)
        };
        return iconMap[type] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 666,
            columnNumber: 48
        }, this);
    };
    const getTypeColor = (type)=>{
        return stakeholderTypeDefinitions[type]?.color || "#6b7280";
    };
    // Interactive Network Visualization Component
    const NetworkView = ()=>{
        _s1();
        const [dimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
            width: 800,
            height: 600
        });
        const [hoveredNode, setHoveredNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
        // Create nodes and links data structure
        const networkData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "CareerStakeholderMatrix.NetworkView.useMemo[networkData]": ()=>{
                const nodes = filteredStakeholders.map({
                    "CareerStakeholderMatrix.NetworkView.useMemo[networkData].nodes": (stakeholder, index)=>({
                            id: stakeholder.id,
                            name: stakeholder.name,
                            organization: stakeholder.organization,
                            type: stakeholder.stakeholderType,
                            careerInfluence: stakeholder.careerInfluence,
                            relationshipSupport: stakeholder.relationshipSupport,
                            engagementDifficulty: stakeholder.engagementDifficulty,
                            category: stakeholder.category,
                            relationship: stakeholder.relationship,
                            x: 100 + index % 4 * 150 + Math.random() * 50,
                            y: 100 + Math.floor(index / 4) * 120 + Math.random() * 50
                        })
                }["CareerStakeholderMatrix.NetworkView.useMemo[networkData].nodes"]);
                const links = [];
                filteredStakeholders.forEach({
                    "CareerStakeholderMatrix.NetworkView.useMemo[networkData]": (stakeholder)=>{
                        stakeholder.connections.forEach({
                            "CareerStakeholderMatrix.NetworkView.useMemo[networkData]": (connectionId)=>{
                                const targetNode = nodes.find({
                                    "CareerStakeholderMatrix.NetworkView.useMemo[networkData].targetNode": (n)=>n.id === connectionId
                                }["CareerStakeholderMatrix.NetworkView.useMemo[networkData].targetNode"]);
                                if (targetNode) {
                                    links.push({
                                        source: stakeholder.id,
                                        target: connectionId,
                                        strength: Math.random() * 0.5 + 0.5 // Random strength for demo
                                    });
                                }
                            }
                        }["CareerStakeholderMatrix.NetworkView.useMemo[networkData]"]);
                    }
                }["CareerStakeholderMatrix.NetworkView.useMemo[networkData]"]);
                return {
                    nodes,
                    links
                };
            }
        }["CareerStakeholderMatrix.NetworkView.useMemo[networkData]"], [
            filteredStakeholders
        ]);
        // Simple force simulation using useEffect
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "CareerStakeholderMatrix.NetworkView.useEffect": ()=>{
                let animationId;
                const simulate = {
                    "CareerStakeholderMatrix.NetworkView.useEffect.simulate": ()=>{
                        // Simple force-directed positioning
                        networkData.nodes.forEach({
                            "CareerStakeholderMatrix.NetworkView.useEffect.simulate": (node, i)=>{
                                let fx = 0, fy = 0;
                                // Repulsion between nodes
                                networkData.nodes.forEach({
                                    "CareerStakeholderMatrix.NetworkView.useEffect.simulate": (other, j)=>{
                                        if (i !== j) {
                                            const dx = node.x - other.x;
                                            const dy = node.y - other.y;
                                            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
                                            const force = 2000 / (distance * distance);
                                            fx += dx / distance * force;
                                            fy += dy / distance * force;
                                        }
                                    }
                                }["CareerStakeholderMatrix.NetworkView.useEffect.simulate"]);
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
                            }
                        }["CareerStakeholderMatrix.NetworkView.useEffect.simulate"]);
                        animationId = requestAnimationFrame(simulate);
                    }
                }["CareerStakeholderMatrix.NetworkView.useEffect.simulate"];
                const timer = setTimeout({
                    "CareerStakeholderMatrix.NetworkView.useEffect.timer": ()=>{
                        simulate();
                        setTimeout({
                            "CareerStakeholderMatrix.NetworkView.useEffect.timer": ()=>cancelAnimationFrame(animationId)
                        }["CareerStakeholderMatrix.NetworkView.useEffect.timer"], 3000); // Stop after 3 seconds
                    }
                }["CareerStakeholderMatrix.NetworkView.useEffect.timer"], 100);
                return ({
                    "CareerStakeholderMatrix.NetworkView.useEffect": ()=>{
                        clearTimeout(timer);
                        if (animationId) cancelAnimationFrame(animationId);
                    }
                })["CareerStakeholderMatrix.NetworkView.useEffect"];
            }
        }["CareerStakeholderMatrix.NetworkView.useEffect"], [
            networkData,
            dimensions
        ]);
        const getNodeRadius = (careerInfluence)=>{
            return Math.max(8, careerInfluence * 3 + 10);
        };
        const getRelationshipColor = (relationship)=>{
            switch(relationship){
                case 'ally':
                    return '#10b981';
                case 'opponent':
                    return '#ef4444';
                case 'neutral':
                    return '#6b7280';
                default:
                    return '#f59e0b';
            }
        };
        const getLinkColor = (sourceNode, targetNode)=>{
            if (sourceNode.relationship === 'ally' && targetNode.relationship === 'ally') {
                return '#10b981';
            }
            return '#94a3b8';
        };
        const networkStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "CareerStakeholderMatrix.NetworkView.useMemo[networkStats]": ()=>{
                const totalConnections = networkData.links.length;
                const avgConnections = filteredStakeholders.length > 0 ? totalConnections * 2 / filteredStakeholders.length : 0;
                const mostConnected = filteredStakeholders.reduce({
                    "CareerStakeholderMatrix.NetworkView.useMemo[networkStats].mostConnected": (max, current)=>current.connections.length > max.connections.length ? current : max
                }["CareerStakeholderMatrix.NetworkView.useMemo[networkStats].mostConnected"], filteredStakeholders[0] || {
                    name: 'N/A',
                    connections: []
                });
                const influenceDistribution = filteredStakeholders.reduce({
                    "CareerStakeholderMatrix.NetworkView.useMemo[networkStats].influenceDistribution": (acc, s)=>{
                        const tier = s.careerInfluence >= 8 ? 'high' : s.careerInfluence >= 6 ? 'medium' : 'low';
                        acc[tier] = (acc[tier] || 0) + 1;
                        return acc;
                    }
                }["CareerStakeholderMatrix.NetworkView.useMemo[networkStats].influenceDistribution"], {});
                return {
                    totalConnections,
                    avgConnections: Math.round(avgConnections * 10) / 10,
                    mostConnected: mostConnected.name,
                    highInfluence: influenceDistribution.high || 0,
                    clusters: Math.ceil(filteredStakeholders.length / 3) // Simplified cluster estimation
                };
            }
        }["CareerStakeholderMatrix.NetworkView.useMemo[networkStats]"], [
            filteredStakeholders,
            networkData
        ]);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold",
                            children: "Network Visualization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 815,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: [
                                filteredStakeholders.length,
                                " nodes, ",
                                networkData.links.length,
                                " connections"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 816,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 814,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 p-3 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-blue-600",
                                    children: networkStats.totalConnections
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 824,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-blue-700",
                                    children: "Total Connections"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 825,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 p-3 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-green-600",
                                    children: networkStats.avgConnections
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 828,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-green-700",
                                    children: "Avg per Person"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 829,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 827,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-50 p-3 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-purple-600",
                                    children: networkStats.highInfluence
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 832,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-purple-700",
                                    children: "High Influence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 833,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 831,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-orange-50 p-3 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-orange-600",
                                    children: networkStats.clusters
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 836,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-orange-700",
                                    children: "Network Clusters"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 837,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 835,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 822,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-green-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 844,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Ally"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 845,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-gray-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 848,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Neutral"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 849,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 847,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-red-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 852,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Opponent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 853,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 851,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-4 h-4 bg-yellow-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 856,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Unknown"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 857,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 855,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-600",
                            children: "• Node size = Career Influence • Click to select"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 859,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 842,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-lg bg-white overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: dimensions.width,
                        height: dimensions.height,
                        className: "cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "#fafafa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 872,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "grid",
                                    width: "40",
                                    height: "40",
                                    patternUnits: "userSpaceOnUse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M 40 0 L 0 0 0 40",
                                        fill: "none",
                                        stroke: "#f1f5f9",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 877,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 875,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "url(#grid)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 880,
                                columnNumber: 13
                            }, this),
                            networkData.links.map((link, index)=>{
                                const sourceNode = networkData.nodes.find((n)=>n.id === link.source);
                                const targetNode = networkData.nodes.find((n)=>n.id === link.target);
                                if (!sourceNode || !targetNode) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: sourceNode.x,
                                    y1: sourceNode.y,
                                    x2: targetNode.x,
                                    y2: targetNode.y,
                                    stroke: getLinkColor(sourceNode, targetNode),
                                    strokeWidth: link.strength * 3,
                                    strokeOpacity: 0.6
                                }, `link-${index}`, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 889,
                                    columnNumber: 17
                                }, this);
                            }),
                            networkData.nodes.map((node)=>{
                                const isSelected = selectedStakeholder?.id === node.id;
                                const isHovered = hoveredNode === node.id;
                                const radius = getNodeRadius(node.careerInfluence);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x + 2,
                                            cy: node.y + 2,
                                            r: radius,
                                            fill: "rgba(0,0,0,0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 911,
                                            columnNumber: 19
                                        }, this),
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: radius + 5,
                                            fill: "none",
                                            stroke: "#3b82f6",
                                            strokeWidth: "3",
                                            strokeDasharray: "5,5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateTransform", {
                                                attributeName: "transform",
                                                attributeType: "XML",
                                                type: "rotate",
                                                from: `0 ${node.x} ${node.y}`,
                                                to: `360 ${node.x} ${node.y}`,
                                                dur: "3s",
                                                repeatCount: "indefinite"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 929,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 920,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: node.x,
                                            cy: node.y,
                                            r: radius,
                                            fill: getRelationshipColor(node.relationship),
                                            stroke: getTypeColor(node.type),
                                            strokeWidth: isHovered ? 4 : 2,
                                            className: "cursor-pointer transition-all duration-200",
                                            onClick: ()=>setSelectedStakeholder(filteredStakeholders.find((s)=>s.id === node.id) || null),
                                            onMouseEnter: ()=>setHoveredNode(node.id),
                                            onMouseLeave: ()=>setHoveredNode(null),
                                            style: {
                                                filter: isHovered ? 'brightness(1.1)' : 'none',
                                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                                transformOrigin: `${node.x}px ${node.y}px`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 942,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: node.x,
                                            y: node.y + radius + 15,
                                            textAnchor: "middle",
                                            className: "text-xs font-medium fill-gray-700 pointer-events-none",
                                            style: {
                                                maxWidth: '80px'
                                            },
                                            children: node.name.split(' ')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 961,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: node.x,
                                            y: node.y + 3,
                                            textAnchor: "middle",
                                            className: "text-xs font-bold fill-white pointer-events-none",
                                            children: node.careerInfluence
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 972,
                                            columnNumber: 19
                                        }, this),
                                        isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: node.x - 60,
                                                    y: node.y - radius - 40,
                                                    width: "120",
                                                    height: "30",
                                                    fill: "rgba(0,0,0,0.8)",
                                                    rx: "4",
                                                    className: "pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 984,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: node.x,
                                                    y: node.y - radius - 30,
                                                    textAnchor: "middle",
                                                    className: "text-xs font-medium fill-white pointer-events-none",
                                                    children: node.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: node.x,
                                                    y: node.y - radius - 18,
                                                    textAnchor: "middle",
                                                    className: "text-xs fill-gray-300 pointer-events-none",
                                                    children: node.organization
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1001,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 983,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, node.id, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 909,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 866,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 865,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-50 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-800 mb-3",
                            children: "Network Insights"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1019,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Most Connected:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1022,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        networkStats.mostConnected,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600",
                                            children: [
                                                "Hub with ",
                                                filteredStakeholders.find((s)=>s.name === networkStats.mostConnected)?.connections.length || 0,
                                                " direct connections"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1023,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Network Density:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        Math.round(networkStats.totalConnections / (filteredStakeholders.length * (filteredStakeholders.length - 1) / 2) * 100),
                                        "%",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600",
                                            children: "Measures how interconnected your network is"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1029,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Key Relationship Types:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600",
                                            children: [
                                                filteredStakeholders.filter((s)=>s.relationship === 'ally').length,
                                                " allies, ",
                                                ' ',
                                                filteredStakeholders.filter((s)=>s.relationship === 'neutral').length,
                                                " neutral, ",
                                                ' ',
                                                filteredStakeholders.filter((s)=>s.relationship === 'opponent').length,
                                                " opponents"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "High-Influence Contacts:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600",
                                            children: [
                                                networkStats.highInfluence,
                                                " stakeholders with 8+ career influence"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1020,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1018,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 813,
            columnNumber: 7
        }, this);
    };
    _s1(NetworkView, "CMgoL/kqdmJ0dvugi0xCpcp/3z8=");
    const MetricSlider = ({ label, value, onChange, metricKey })=>{
        _s2();
        const [showHelp, setShowHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const metric = metricDefinitions[metricKey];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onMouseEnter: ()=>setShowHelp(true),
                                    onMouseLeave: ()=>setShowHelp(false),
                                    className: "text-gray-400 hover:text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1078,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1070,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-gray-700",
                            children: [
                                value,
                                "/10"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1081,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1069,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: "1",
                    max: "10",
                    value: value,
                    onChange: (e)=>onChange(parseInt(e.target.value)),
                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                }, void 0, false, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1084,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1094,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1095,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1096,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1093,
                    columnNumber: 9
                }, this),
                showHelp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-10 p-3 bg-white border rounded-lg shadow-lg max-w-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium mb-2",
                            children: metric.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-600 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "1-3:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1103,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        metric.scale.low
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "4-7:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        metric.scale.medium
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "8-10:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1105,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        metric.scale.high
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1100,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 1068,
            columnNumber: 7
        }, this);
    };
    _s2(MetricSlider, "wYMdefTmvEYZthPPLsoVGi/6W5g=");
    const StakeholderForm = ({ stakeholder, onSave, onCancel })=>{
        _s3();
        const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stakeholder || {
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
            connections: []
        });
        const handleSubmit = ()=>{
            const newStakeholder = {
                ...formData,
                id: stakeholder?.id || Date.now().toString(),
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
                connections: formData.connections || []
            };
            onSave(newStakeholder);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold mb-6",
                        children: stakeholder ? "Edit Stakeholder" : "Add New Stakeholder"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-medium mb-4 text-gray-800",
                                        children: "Basic Information"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Name *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.name || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Organization *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1197,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.organization || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                organization: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Position"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.position || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                position: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.location || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                location: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1240,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: formData.email || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                email: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        value: formData.phone || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phone: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1253,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-medium mb-4 text-gray-800",
                                        children: "Classification"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1270,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.category || "external",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                category: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "internal",
                                                                children: "Internal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1283,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "external",
                                                                children: "External"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1284,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "client",
                                                                children: "Client"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1285,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "vendor",
                                                                children: "Vendor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1286,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "government",
                                                                children: "Government"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "media",
                                                                children: "Media"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1288,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "community",
                                                                children: "Community"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1289,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1273,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1269,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium",
                                                                children: "Stakeholder Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1295,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowTypeGuide(true),
                                                                className: "text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                        lineNumber: 1303,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "View Guide"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                        lineNumber: 1304,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.stakeholderType || "influencer",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                stakeholderType: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: Object.entries(stakeholderTypeDefinitions).map(([key, def])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: key,
                                                                children: def.title
                                                            }, key, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1319,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1307,
                                                        columnNumber: 19
                                                    }, this),
                                                    formData.stakeholderType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 p-3 bg-gray-50 rounded-lg text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: [
                                                                        stakeholderTypeDefinitions[formData.stakeholderType]?.title,
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 1328,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                stakeholderTypeDefinitions[formData.stakeholderType]?.description
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1327,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1326,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Relationship"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1346,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.relationship || "neutral",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                relationship: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ally",
                                                                children: "Ally"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1359,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "neutral",
                                                                children: "Neutral"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "opponent",
                                                                children: "Opponent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1361,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "unknown",
                                                                children: "Unknown"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1362,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1349,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1345,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Engagement Frequency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1367,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.engagementFrequency || "monthly",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                engagementFrequency: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "weekly",
                                                                children: "Weekly"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1380,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "monthly",
                                                                children: "Monthly"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1381,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "quarterly",
                                                                children: "Quarterly"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1382,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "annually",
                                                                children: "Annually"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "as_needed",
                                                                children: "As Needed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1384,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1370,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1366,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Last Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1389,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: formData.lastContact || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                lastContact: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-medium mb-4 text-gray-800",
                                        children: "Career Impact Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSlider, {
                                                label: "Career Influence",
                                                value: formData.careerInfluence || 5,
                                                onChange: (value)=>setFormData({
                                                        ...formData,
                                                        careerInfluence: value
                                                    }),
                                                metricKey: "careerInfluence"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1408,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSlider, {
                                                label: "Relationship Support",
                                                value: formData.relationshipSupport || 5,
                                                onChange: (value)=>setFormData({
                                                        ...formData,
                                                        relationshipSupport: value
                                                    }),
                                                metricKey: "relationshipSupport"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1414,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricSlider, {
                                                label: "Engagement Difficulty",
                                                value: formData.engagementDifficulty || 5,
                                                onChange: (value)=>setFormData({
                                                        ...formData,
                                                        engagementDifficulty: value
                                                    }),
                                                metricKey: "engagementDifficulty"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1407,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1405,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-medium mb-4 text-gray-800",
                                        children: "Additional Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Core Interests"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1434,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.coreInterests?.join(", ") || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                coreInterests: e.target.value.split(",").map((s)=>s.trim())
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        placeholder: "e.g., Innovation, Leadership, Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children: "Separate multiple interests with commas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Potential Outcomes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1455,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.potentialOutcomes?.join(", ") || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                potentialOutcomes: e.target.value.split(",").map((s)=>s.trim())
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        placeholder: "e.g., Job opportunities, Mentorship, Referrals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 mt-1",
                                                        children: "Separate multiple outcomes with commas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1472,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1454,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1476,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: formData.notes || "",
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                notes: e.target.value
                                                            }),
                                                        className: "w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        rows: 4,
                                                        placeholder: "Additional notes about this stakeholder..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1477,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1475,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1432,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1430,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3 pt-6 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onCancel,
                                        className: "px-6 py-3 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1491,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSubmit,
                                        className: "px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                                        children: [
                                            stakeholder ? "Update" : "Add",
                                            " Stakeholder"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1498,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1490,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1178,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 1173,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 1172,
            columnNumber: 7
        }, this);
    };
    _s3(StakeholderForm, "EYPrPTl2yit/L41/j7KQaoyDX3c=");
    const StakeholderDetails = ({ stakeholder })=>{
        const connections = stakeholders.filter((s)=>stakeholder.connections.includes(s.id));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-lg",
                                    style: {
                                        backgroundColor: getTypeColor(stakeholder.stakeholderType) + "20"
                                    },
                                    children: getTypeIcon(stakeholder.stakeholderType)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1525,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-xl",
                                            children: stakeholder.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1535,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-lg",
                                            children: [
                                                stakeholder.position,
                                                " at ",
                                                stakeholder.organization
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1536,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 rounded-full text-sm font-medium text-white",
                                                    style: {
                                                        backgroundColor: getTypeColor(stakeholder.stakeholderType)
                                                    },
                                                    children: stakeholderTypeDefinitions[stakeholder.stakeholderType]?.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1 rounded-full text-sm font-medium ${stakeholder.relationship === "ally" ? "bg-green-100 text-green-800" : stakeholder.relationship === "neutral" ? "bg-gray-100 text-gray-800" : stakeholder.relationship === "opponent" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`,
                                                    children: stakeholder.relationship.charAt(0).toUpperCase() + stakeholder.relationship.slice(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1552,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1539,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1534,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1524,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditStakeholder(stakeholder),
                                    className: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1574,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1570,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteStakeholder(stakeholder),
                                    className: "p-2 text-red-600 hover:bg-red-50 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1580,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1576,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1523,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-3 text-gray-800",
                                    children: "Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1590,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: stakeholder.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1589,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Phone:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1594,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: stakeholder.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1595,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1593,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Location:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1598,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: stakeholder.location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1599,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1597,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600",
                                                    children: "Last Contact:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1602,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: stakeholder.lastContact
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1603,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1601,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1588,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-3 text-gray-800",
                                    children: "Career Impact Metrics"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1609,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Career Influence:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1612,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-blue-600 h-2 rounded-full",
                                                                style: {
                                                                    width: `${stakeholder.careerInfluence / 10 * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1615,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1614,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: [
                                                                stakeholder.careerInfluence,
                                                                "/10"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1620,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1613,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1611,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Relationship Support:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-green-600 h-2 rounded-full",
                                                                style: {
                                                                    width: `${stakeholder.relationshipSupport / 10 * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1627,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1626,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: [
                                                                stakeholder.relationshipSupport,
                                                                "/10"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1632,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1625,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1623,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Engagement Difficulty:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-24 bg-gray-200 rounded-full h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-orange-600 h-2 rounded-full",
                                                                style: {
                                                                    width: `${stakeholder.engagementDifficulty / 10 * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1639,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1638,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: [
                                                                stakeholder.engagementDifficulty,
                                                                "/10"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 1644,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1637,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1635,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1610,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1608,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1585,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold mb-3 text-gray-800",
                            children: "Stakeholder Type"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-gray-50 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            stakeholderTypeDefinitions[stakeholder.stakeholderType]?.title,
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1655,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    stakeholderTypeDefinitions[stakeholder.stakeholderType]?.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1654,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1653,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1651,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold mb-3 text-gray-800",
                            children: "Core Interests"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1672,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: stakeholder.coreInterests.map((interest, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",
                                    children: interest
                                }, index, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1675,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1673,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1671,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold mb-3 text-gray-800",
                            children: "Potential Outcomes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1686,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: stakeholder.potentialOutcomes.map((outcome, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm",
                                    children: outcome
                                }, index, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1687,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1685,
                    columnNumber: 9
                }, this),
                connections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold mb-3 text-gray-800",
                            children: "Connected Stakeholders"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1701,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: connections.map((connection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm cursor-pointer hover:bg-gray-200",
                                    onClick: ()=>setSelectedStakeholder(connection),
                                    children: connection.name
                                }, connection.id, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1704,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1702,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1700,
                    columnNumber: 11
                }, this),
                stakeholder.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold mb-3 text-gray-800",
                            children: "Notes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1718,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700 bg-gray-50 p-4 rounded-lg",
                            children: stakeholder.notes
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1719,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1717,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 1522,
            columnNumber: 7
        }, this);
    };
    const CustomTooltip = ({ active, payload })=>{
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-3 border rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold",
                        children: data.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1731,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: data.organization
                    }, void 0, false, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1732,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            matrixView === "influence-support" && `Career Influence: ${data.careerInfluence}, Support: ${data.relationshipSupport}`,
                            matrixView === "influence-difficulty" && `Career Influence: ${data.careerInfluence}, Difficulty: ${data.engagementDifficulty}`
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1733,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 1730,
                columnNumber: 9
            }, this);
        }
        return null;
    };
    const StakeholderTypeGuide = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold",
                                children: "Stakeholder Type Guide"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1750,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowTypeGuide(false),
                                className: "text-gray-500 hover:text-gray-700 text-2xl",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1751,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1749,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: Object.entries(stakeholderTypeDefinitions).map(([key, definition])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg text-white font-bold",
                                                style: {
                                                    backgroundColor: definition.color
                                                },
                                                children: definition.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1764,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                style: {
                                                    color: definition.color
                                                },
                                                children: definition.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1770,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1763,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 mb-3",
                                        children: definition.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1778,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium text-sm text-gray-800 mb-2",
                                                children: "Key Characteristics:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1781,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm text-gray-600 space-y-1",
                                                children: definition.characteristics.map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1787,
                                                                columnNumber: 27
                                                            }, this),
                                                            char
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1786,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1784,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1780,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium text-sm text-gray-800 mb-2",
                                                children: "Examples:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1795,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1",
                                                children: definition.examples.map((example, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 rounded text-xs text-white",
                                                        style: {
                                                            backgroundColor: definition.color
                                                        },
                                                        children: example
                                                    }, index, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1800,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1798,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1794,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1762,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1759,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-blue-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-blue-800 mb-2",
                                children: "Pro Tips for Career Success:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1816,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-blue-700 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Power Brokers:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1821,
                                                columnNumber: 19
                                            }, this),
                                            " Cultivate these relationships early - they can open unexpected doors"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1820,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Decision Makers:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1825,
                                                columnNumber: 19
                                            }, this),
                                            " Understand their priorities and align your value proposition accordingly"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1824,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Champions:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1829,
                                                columnNumber: 19
                                            }, this),
                                            " Keep them informed of your wins so they can advocate effectively"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1828,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Gatekeepers:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1833,
                                                columnNumber: 19
                                            }, this),
                                            " Build genuine relationships - they often have more influence than apparent"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1832,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Connectors:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1837,
                                                columnNumber: 19
                                            }, this),
                                            " Offer value first before asking for introductions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1836,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1819,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1815,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowTypeGuide(false),
                            className: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                            children: "Got It!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1844,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 1843,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                lineNumber: 1748,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 1747,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900 mb-2",
                            children: "Career Stakeholder Matrix"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1861,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Map and analyze your professional relationships to accelerate career growth"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1864,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1860,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg border p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-5 h-5 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1874,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search stakeholders...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "border rounded-md px-3 py-2 w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1875,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1873,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: filterCategory,
                                    onChange: (e)=>setFilterCategory(e.target.value),
                                    className: "border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1889,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "internal",
                                            children: "Internal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1890,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "external",
                                            children: "External"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1891,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "client",
                                            children: "Client"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1892,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "vendor",
                                            children: "Vendor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1893,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "government",
                                            children: "Government"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1894,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "media",
                                            children: "Media"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1895,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "community",
                                            children: "Community"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1896,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1884,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: filterType,
                                    onChange: (e)=>setFilterType(e.target.value),
                                    className: "border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All Types"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "power_broker",
                                            children: "Power Brokers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1905,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "decision_maker",
                                            children: "Decision Makers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1906,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "influencer",
                                            children: "Influencers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1907,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "gatekeeper",
                                            children: "Gatekeepers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1908,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "champion",
                                            children: "Champions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1909,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "analyst",
                                            children: "Analysts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1910,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "connector",
                                            children: "Connectors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1911,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1899,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewMode("matrix"),
                                            className: `px-4 py-2 text-sm font-medium ${viewMode === "matrix" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"}`,
                                            children: "Matrix View"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1915,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewMode("network"),
                                            className: `px-4 py-2 text-sm font-medium ${viewMode === "network" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"}`,
                                            children: "Network View"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1925,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewMode("analytics"),
                                            className: `px-4 py-2 text-sm font-medium ${viewMode === "analytics" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"}`,
                                            children: "Analytics"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1935,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1914,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsAddingStakeholder(true),
                                            className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1952,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add Stakeholder"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1953,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1948,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowTypeGuide(true),
                                            className: "bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center space-x-2 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1960,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Type Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 1961,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 1956,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 1947,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1872,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-800",
                                children: [
                                    "💡 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "New to stakeholder mapping?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1969,
                                        columnNumber: 18
                                    }, this),
                                    " Click the",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowTypeGuide(true),
                                        className: "inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium underline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1974,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Type Guide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1975,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 1970,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "to learn about the 7 stakeholder types and how to categorize your professional relationships effectively."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1968,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1967,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1871,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg border p-6",
                                children: [
                                    viewMode === "matrix" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold",
                                                        children: "Stakeholder Matrix"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1991,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: matrixView,
                                                        onChange: (e)=>setMatrixView(e.target.value),
                                                        className: "border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "influence-support",
                                                                children: "Career Influence vs Support"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 1999,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "influence-difficulty",
                                                                children: "Career Influence vs Engagement Difficulty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 2002,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 1994,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 1990,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-96 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: "100%",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ScatterChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScatterChart"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2011,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    type: "number",
                                                                    dataKey: "x",
                                                                    domain: [
                                                                        0,
                                                                        11
                                                                    ],
                                                                    name: matrixView === "influence-support" ? "Career Influence" : "Career Influence",
                                                                    ticks: [
                                                                        1,
                                                                        2,
                                                                        3,
                                                                        4,
                                                                        5,
                                                                        6,
                                                                        7,
                                                                        8,
                                                                        9,
                                                                        10
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2012,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    type: "number",
                                                                    dataKey: "y",
                                                                    domain: [
                                                                        0,
                                                                        11
                                                                    ],
                                                                    name: matrixView === "influence-support" ? "Relationship Support" : "Engagement Difficulty",
                                                                    ticks: [
                                                                        1,
                                                                        2,
                                                                        3,
                                                                        4,
                                                                        5,
                                                                        6,
                                                                        7,
                                                                        8,
                                                                        9,
                                                                        10
                                                                    ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2019,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                        lineNumber: 2026,
                                                                        columnNumber: 43
                                                                    }, void 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2026,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                                                                    data: getMatrixData(),
                                                                    children: getMatrixData().map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                            fill: getCategoryColor(entry.category)
                                                                        }, `cell-${index}`, false, {
                                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                            lineNumber: 2029,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2027,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2010,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2009,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow",
                                                        children: getQuadrantLabel(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2039,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow",
                                                        children: getQuadrantLabel(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow",
                                                        children: getQuadrantLabel(4)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2045,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-4 right-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow",
                                                        children: getQuadrantLabel(3)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2048,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 2008,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    viewMode === "analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold",
                                                children: "Stakeholder Analytics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 2057,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-medium mb-3",
                                                                children: "Distribution by Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 2063,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-64",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                                data: Object.entries(filteredStakeholders.reduce((acc, s)=>{
                                                                                    acc[s.category] = (acc[s.category] || 0) + 1;
                                                                                    return acc;
                                                                                }, {})).map(([key, value])=>({
                                                                                        name: key,
                                                                                        value
                                                                                    })),
                                                                                cx: "50%",
                                                                                cy: "50%",
                                                                                outerRadius: 80,
                                                                                dataKey: "value",
                                                                                label: ({ name, percent })=>`${name}: ${(percent * 100).toFixed(0)}%`,
                                                                                children: Object.keys(filteredStakeholders.reduce((acc, s)=>{
                                                                                    acc[s.category] = (acc[s.category] || 0) + 1;
                                                                                    return acc;
                                                                                }, {})).map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                                        fill: getCategoryColor(category)
                                                                                    }, `cell-${index}`, false, {
                                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                        lineNumber: 2090,
                                                                                        columnNumber: 33
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2069,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2096,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                        lineNumber: 2068,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2067,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 2066,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2062,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-medium mb-3",
                                                                children: "Average Career Influence by Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 2103,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-64",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                                        data: Object.entries(filteredStakeholders.reduce((acc, s)=>{
                                                                            if (!acc[s.stakeholderType]) {
                                                                                acc[s.stakeholderType] = {
                                                                                    total: 0,
                                                                                    count: 0
                                                                                };
                                                                            }
                                                                            acc[s.stakeholderType].total += s.careerInfluence;
                                                                            acc[s.stakeholderType].count += 1;
                                                                            return acc;
                                                                        }, {})).map(([key, value])=>({
                                                                                name: key.replace("_", " "),
                                                                                value: Math.round(value.total / value.count)
                                                                            })),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                                strokeDasharray: "3 3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2126,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                                dataKey: "name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2127,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2128,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2129,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                                dataKey: "value",
                                                                                fill: "#3b82f6"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                lineNumber: 2130,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                        lineNumber: 2108,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2107,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 2106,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                        lineNumber: 2102,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                lineNumber: 2061,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2056,
                                        columnNumber: 17
                                    }, this),
                                    viewMode === "network" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NetworkView, {}, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2139,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 1987,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 1986,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: [
                                            "Stakeholders (",
                                            filteredStakeholders.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2146,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 2145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg border p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-medium mb-3",
                                            children: "Key Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 2153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Power Brokers:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2156,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium ml-2",
                                                            children: filteredStakeholders.filter((s)=>s.stakeholderType === "power_broker").length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2157,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 2155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "High Influence:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2166,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium ml-2",
                                                            children: filteredStakeholders.filter((s)=>s.careerInfluence >= 8).length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2167,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 2165,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Strong Support:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2175,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium ml-2",
                                                            children: filteredStakeholders.filter((s)=>s.relationshipSupport >= 8).length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2176,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 2174,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: "Needs Attention:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium ml-2",
                                                            children: filteredStakeholders.filter((s)=>s.careerInfluence >= 7 && s.relationshipSupport <= 6).length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2186,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 2184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 2154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 2152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 max-h-96 overflow-y-auto",
                                    children: filteredStakeholders.map((stakeholder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer",
                                            onClick: ()=>setSelectedStakeholder(stakeholder),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg",
                                                                    style: {
                                                                        backgroundColor: getTypeColor(stakeholder.stakeholderType) + "20"
                                                                    },
                                                                    children: getTypeIcon(stakeholder.stakeholderType)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2206,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-medium",
                                                                            children: stakeholder.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                            lineNumber: 2216,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-600",
                                                                                    children: stakeholder.organization
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                    lineNumber: 2218,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-2 py-1 rounded text-xs font-medium text-white",
                                                                                    style: {
                                                                                        backgroundColor: getTypeColor(stakeholder.stakeholderType)
                                                                                    },
                                                                                    children: stakeholderTypeDefinitions[stakeholder.stakeholderType]?.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                                    lineNumber: 2221,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                            lineNumber: 2217,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2215,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2205,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-600",
                                                                            children: [
                                                                                "Influence: ",
                                                                                stakeholder.careerInfluence,
                                                                                "/10"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                            lineNumber: 2240,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-600",
                                                                            children: [
                                                                                "Support: ",
                                                                                stakeholder.relationshipSupport,
                                                                                "/10"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                            lineNumber: 2243,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2239,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        handleEditStakeholder(stakeholder);
                                                                    },
                                                                    className: "p-1 text-blue-600 hover:bg-blue-50 rounded",
                                                                    title: "Edit stakeholder",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                        lineNumber: 2255,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                    lineNumber: 2247,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2238,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 2204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex flex-wrap gap-1",
                                                    children: [
                                                        stakeholder.coreInterests.slice(0, 3).map((interest, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs",
                                                                children: interest
                                                            }, index, false, {
                                                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                                lineNumber: 2264,
                                                                columnNumber: 25
                                                            }, this)),
                                                        stakeholder.coreInterests.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs",
                                                            children: [
                                                                "+",
                                                                stakeholder.coreInterests.length - 3,
                                                                " more"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                            lineNumber: 2272,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                                    lineNumber: 2260,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, stakeholder.id, true, {
                                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                            lineNumber: 2199,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                    lineNumber: 2197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                            lineNumber: 2144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 1984,
                    columnNumber: 9
                }, this),
                selectedStakeholder && !isAddingStakeholder && !isEditingStakeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold",
                                        children: "Stakeholder Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2290,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedStakeholder(null),
                                        className: "text-gray-500 hover:text-gray-700",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2291,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 2289,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StakeholderDetails, {
                                stakeholder: selectedStakeholder
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 2298,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 2288,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 2287,
                    columnNumber: 13
                }, this),
                (isAddingStakeholder || isEditingStakeholder) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StakeholderForm, {
                    stakeholder: isEditingStakeholder ? selectedStakeholder || undefined : undefined,
                    onSave: handleSaveStakeholder,
                    onCancel: handleCancelForm
                }, void 0, false, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 2305,
                    columnNumber: 11
                }, this),
                showTypeGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StakeholderTypeGuide, {}, void 0, false, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 2317,
                    columnNumber: 27
                }, this),
                stakeholderToDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 w-full max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: "Confirm Deletion"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 2323,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: [
                                    "Are you sure you want to delete",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: stakeholderToDelete.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2326,
                                        columnNumber: 17
                                    }, this),
                                    "? This action cannot be undone."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 2324,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStakeholderToDelete(null),
                                        className: "px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-50",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2330,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: confirmDelete,
                                        className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
                                        children: "Delete Stakeholder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                        lineNumber: 2336,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                                lineNumber: 2329,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                        lineNumber: 2322,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
                    lineNumber: 2321,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
            lineNumber: 1858,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CareerStakeholderMatrix.tsx",
        lineNumber: 1857,
        columnNumber: 5
    }, this);
};
_s(CareerStakeholderMatrix, "GUpSA7iRirHmsG6WyE2KhoyUwYs=");
_c = CareerStakeholderMatrix;
const __TURBOPACK__default__export__ = CareerStakeholderMatrix;
var _c;
__turbopack_context__.k.register(_c, "CareerStakeholderMatrix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_CareerStakeholderMatrix_tsx_47a68a33._.js.map