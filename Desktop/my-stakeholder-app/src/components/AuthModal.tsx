"use client";
import React, { useState } from "react";
import { X, Mail, Lock, User, AlertCircle, Loader2, Eye, EyeOff } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (email: string, password: string) => Promise<void>;
  onCreateAccount: (email: string, password: string, name: string) => Promise<void>;
  onContinueAsGuest: () => void;
  isLoading: boolean;
  error: string | null;
  isAnonymousUser?: boolean;
  stakeholderCount?: number;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSignIn,
  onCreateAccount,
  onContinueAsGuest,
  isLoading,
  error,
  isAnonymousUser = false,
  stakeholderCount = 0,
}) => {
  const [activeTab, setActiveTab] = useState<"signin" | "create">("signin");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validatePassword(formData.password)) {
      errors.password = "Password must be at least 6 characters";
    }

    if (activeTab === "create" && !formData.name.trim()) {
    errors.name = "Name is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      if (activeTab === "signin") {
      await onSignIn(formData.email, formData.password);
      } else {
      await onCreateAccount(formData.email, formData.password, formData.name);
      }
      // Reset form on success
      setFormData({ email: "", password: "", name: "" });
      setValidationErrors({});
    } catch (error) {
      // Error handling is managed by parent component
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {activeTab === "signin" ? "Sign In to Your Account" : "Save Your Data - Create Account"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("signin")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === "signin"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === "create"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Error Alert */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          {/* Data Preservation Notice */}
          {activeTab === "create" && isAnonymousUser && stakeholderCount > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
              <p className="text-sm text-green-700">
                <strong>✓ Your {stakeholderCount} stakeholder{stakeholderCount > 1 ? 's' : ''} will be saved!</strong>
                <br />Creating an account preserves all your current data and makes it accessible from any device or browser.
              </p>
            </div>
          )}

          {/* Name Field (Create Account Only) */}
          {activeTab === "create" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.name ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
              </div>
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
              )}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  validationErrors.email ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
            {validationErrors.email && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`w-full pl-10 pr-12 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  validationErrors.password ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your password"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {validationErrors.password && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
            )}
            {activeTab === "create" && (
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 6 characters long
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-colors"
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>
              {isLoading
                ? activeTab === "signin"
                  ? "Signing In..."
                  : "Saving Your Data..."
                : activeTab === "signin"
                ? "Sign In"
                : "Save My Data Permanently"}
            </span>
          </button>

          {/* Continue as Guest */}
          <div className="text-center">
            <button
              type="button"
              onClick={onContinueAsGuest}
              disabled={isLoading}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
            >
              Continue as Guest
            </button>
          </div>

          {/* Additional Info */}
          {activeTab === "create" && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <p className="text-sm text-blue-700">
                <strong>Save your work permanently:</strong>
              </p>
              <ul className="text-sm text-blue-600 mt-1 space-y-1">
                <li>• {isAnonymousUser && stakeholderCount > 0 ? 'Keep' : 'Save'} your stakeholder data across all devices</li>
                <li>• Access from any device, any browser, anywhere</li>
                <li>• Data never gets lost, even if you clear cookies</li>
                <li>• Continue your work seamlessly from any location</li>
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};