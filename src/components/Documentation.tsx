import React from 'react';
import { 
  Book, FileText, Key, Home, Plus, Edit, RefreshCw, Trash2
} from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Documentation Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a 
                href="/" 
                className="flex items-center group"
                title="Return to Homepage"
                aria-label="Return to TEAMSTAR homepage"
              >
                <Home className="h-[60px] w-[30px] text-black" aria-hidden="true" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-black">API-First Task Management Documentation</h1>
                <p className="text-gray-600">Complete guide to the TEAMSTAR API for field service management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <nav className="col-span-3 space-y-8" role="navigation" aria-label="Documentation navigation">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Getting Started</h2>
              <ul className="space-y-2" role="list">
                <li>
                  <a href="#overview" className="flex items-center text-gray-600 hover:text-black" aria-label="Overview of TEAMSTAR API">
                    <Book className="h-4 w-4 mr-2" aria-hidden="true" />
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#authentication" className="flex items-center text-gray-600 hover:text-black" aria-label="Authentication guide">
                    <Key className="h-4 w-4 mr-2" aria-hidden="true" />
                    Authentication
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">API Methods</h2>
              <ul className="space-y-2" role="list">
                <li>
                  <a href="#get" className="flex items-center text-gray-600 hover:text-black" aria-label="GET API endpoints">
                    <FileText className="h-4 w-4 mr-2" aria-hidden="true" />
                    GET Routes
                  </a>
                </li>
                <li>
                  <a href="#post" className="flex items-center text-gray-600 hover:text-black" aria-label="POST API endpoints">
                    <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                    POST Methods
                  </a>
                </li>
                <li>
                  <a href="#put" className="flex items-center text-gray-600 hover:text-black" aria-label="PUT API endpoints">
                    <Edit className="h-4 w-4 mr-2" aria-hidden="true" />
                    PUT Methods
                  </a>
                </li>
                <li>
                  <a href="#patch" className="flex items-center text-gray-600 hover:text-black" aria-label="PATCH API endpoints">
                    <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
                    PATCH Methods
                  </a>
                </li>
                <li>
                  <a href="#delete" className="flex items-center text-gray-600 hover:text-black" aria-label="DELETE API endpoints">
                    <Trash2 className="h-4 w-4 mr-2" aria-hidden="true" />
                    DELETE Routes
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="col-span-9 space-y-12" role="main">
            {/* Overview Section */}
            <section id="overview" className="space-y-6" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-3xl font-bold text-black">API-First Task Management Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  This API provides endpoints for a GDPR-compliant task management system designed for field service teams. 
                  Manage users, tasks, reports, and attachments with our secure JWT-based authentication system.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h3 className="text-lg font-semibold mb-2">Base URL</h3>
                  <code className="bg-black text-white px-3 py-1 rounded" aria-label="API base URL">https://teamstar-api.d3.net/api/</code>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h3 className="text-lg font-semibold mb-2">Authentication Middleware</h3>
                  <h4 className="font-medium mb-2">Secure Token Authentication</h4>
                  <p className="text-gray-600">
                    Our middleware validates JWT tokens for secure access to field service management endpoints. 
                    Valid tokens grant access to user details and protected resources, while invalid tokens return appropriate error responses.
                  </p>
                </div>
              </div>
            </section>

            {/* Authentication Section */}
            <section id="authentication" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Authentication</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Login to Get Auth Token</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/login</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">POST</code></p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Request Body:</h4>
                    <p className="text-gray-600 mb-2">Either phone or email must be selected</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>phone (String): User's phone number (required)</li>
                      <li>password (String): User's password (required)</li>
                      <li>email (String): User's Email address (required)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Codes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns access token on successful login</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - If user does not exist</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">403 Forbidden</code> - If PIN is invalid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* GET Routes Section */}
            <section id="get" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">GET Routes</h2>
              
              {/* Get All Users */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Get All Users</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllUsers</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                    <p className="font-medium">Authentication: Required</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-gray-600">Retrieves all users in the system.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Codes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of users</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Continue with other GET routes... */}
              // ... existing code ...

            </section>

            {/* POST Methods Section */}
            <section id="post" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">POST Methods</h2>
              
              {/* Create Customer */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Create Customer</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/createCustomer/</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">POST</code></p>
                    <p className="font-medium">Authentication: Required</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-gray-600">Creates a new customer organization by an admin or supervisor.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Request Body:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>name (String, required): Name of the customer</li>
                      <li>email (String, required): Email of the customer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Codes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">201 Created</code> - Customer organization created successfully</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If the user is not authorized to create a customer</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Continue with other POST methods... */}
              // ... existing code ...

            </section>

            {/* PUT Methods Section */}
            <section id="put" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">PUT Methods</h2>
              
              {/* Update Task */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Update Task</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/updateTask/:task_id</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">PUT</code></p>
                    <p className="font-medium">Authentication: Required</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-gray-600">Updates an existing task's details.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">URL Parameters:</h4>
                    <ul className="list-disc list-inside">
                      <li>task_id (String): The ID of the task to update</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Request Body:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>title (String, optional): New title for the task</li>
                      <li>description (String, optional): New description for the task</li>
                      <li>status (String, optional): New status for the task</li>
                      <li>priority (String, optional): New priority level</li>
                      <li>due_date (Date, optional): New due date for the task</li>
                      <li>assigned_to (String, optional): ID of the user to assign the task to</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Codes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Task updated successfully</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid task ID or request body</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - Task not found</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Continue with other PUT methods... */}
              // ... existing code ...

            </section>

            {/* PATCH Methods Section */}
            <section id="patch" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">PATCH Methods</h2>
              
              {/* Change User Role */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Change User Role</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/changeUserRole/:target_id</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">PATCH</code></p>
                    <p className="font-medium">Authentication: Required</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-gray-600">Toggles the role of a member to supervisor and vice versa</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Path Parameters:</h4>
                    <ul className="list-disc list-inside">
                      <li>target_id (String): The ID of the user</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Codes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Task updated successfully</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">304 Not Modified</code> - No changes were made to the task</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If a non-admin tries to update the task</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - If the task does not exist</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* DELETE Routes Section */}
            <section id="delete" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">DELETE Routes</h2>
              
              {/* Delete Task by ID */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Delete Task by ID</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/deleteTask/:id</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">DELETE</code></p>
                    <p className="font-medium">Authentication: Required</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-gray-600">Deletes a task by its ID, along with associated data, such as history logs, comments, attachments, and checklist items.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">URL Parameters:</h4>
                    <ul className="list-disc list-inside">
                      <li>id (String): The unique ID of the task to delete</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Task and related data deleted successfully</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid Task ID format</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">401 Unauthorized</code> - User is not authorized to delete the task</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - Task with the specified ID does not exist</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Continue with other DELETE routes... */}
              // ... existing code ...

            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 