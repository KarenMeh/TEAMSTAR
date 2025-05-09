import React from 'react';
import { 
  Book, Code, Terminal, Database, Zap, Settings, Home,
  Users, FileText, Paperclip, BarChart, Key, Globe, MessageSquare,
  Trash2, Plus, Edit, RefreshCw
} from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Documentation Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a 
                href="/" 
                className="flex items-center group"
                title="Return to Homepage"
              >
                <Home className="h-[60px] w-[30px] text-black" />
                </a>
              <div>
                <h1 className="text-2xl font-bold text-black">API Documentation</h1>
                <p className="text-gray-600">Complete guide to the TEAMSTAR API</p>
              </div>
            </div>
            
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <nav className="col-span-3 space-y-8 sticky top-28">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Getting Started</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#overview" className="flex items-center text-gray-600 hover:text-black">
                    <Book className="h-4 w-4 mr-2" />
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#authentication" className="flex items-center text-gray-600 hover:text-black">
                    <Key className="h-4 w-4 mr-2" />
                    Authentication
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">API Methods</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#get" className="flex items-center text-gray-600 hover:text-black">
                    <FileText className="h-4 w-4 mr-2" />
                    GET Routes
                  </a>
                </li>
                <li>
                  <a href="#post" className="flex items-center text-gray-600 hover:text-black">
                    <Plus className="h-4 w-4 mr-2" />
                    POST Methods
                  </a>
                </li>
                <li>
                  <a href="#put" className="flex items-center text-gray-600 hover:text-black">
                    <Edit className="h-4 w-4 mr-2" />
                    PUT Methods
                  </a>
                </li>
                <li>
                  <a href="#patch" className="flex items-center text-gray-600 hover:text-black">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    PATCH Methods
                  </a>
                </li>
                <li>
                  <a href="#delete" className="flex items-center text-gray-600 hover:text-black">
                    <Trash2 className="h-4 w-4 mr-2" />
                    DELETE Routes
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="col-span-9 space-y-12">
            {/* Overview Section */}
            <section id="overview" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  This API provides endpoints for a task management system to manage users, tasks, reports, and attachments. 
                  The API is secured using JWT-based authentication.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h3 className="text-lg font-semibold mb-2">Base URL</h3>
                  <code className="bg-black text-white px-3 py-1 rounded">https://teamstar-api.d3.net/api/</code>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h3 className="text-lg font-semibold mb-2">Authentication Middleware</h3>
                  <h4 className="font-medium mb-2">Authenticate Token</h4>
                  <p className="text-gray-600">
                    This middleware validates the JWT token sent in the request's authorization header. If valid, it adds the user's details to req.user and calls the next middleware; otherwise, it returns a 401 Unauthorized or 403 Forbidden response.
                  </p>
                </div>
              </div>
            </section>

            {/* Authentication Section */}
            <section id="authentication" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Authentication</h2>
              <div className="prose max-w-none">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Login to Get Auth Token</h3>
                  <p className="text-gray-600 mb-4">
                    Authenticates a user with either their email or phone number and PIN, returning a JWT token if successful.
                  </p>
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
              </div>
            </section>

            {/* GET Routes Section */}
            <section id="get" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">GET Routes</h2>
              <div className="space-y-8">
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

                {/* Get All Tasks */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get All Tasks</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllTasks</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all messages in the system.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of messages</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Organization's Tasks */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Organization's Tasks</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getOrganizationTask/:customer_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves tasks assigned to a specific organization (by customer_id).</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>customer_id (String): The organization's ID</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of tasks for the specified organization</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get All Customers */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get All Customers</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllCustomers</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all customers.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of customers</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get All Attachments */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get All Attachments</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllAttachments</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all task attachments.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of attachments</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Attachments for a Task */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Attachments for a Task</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getTaskAttachments/:task_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves attachments for a specific task by task_id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>task_id (String): The ID of the task</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of attachments for the specified task</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get All Reports */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get All Reports</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllReports</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all reports.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of reports</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Reports for an Organization */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Reports for an Organization</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCustomerReports/:customer_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all reports for a specific organization by customer_id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>customer_id (String): The ID of the organization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of reports for the specified organization</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get All Messages */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get All Messages</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllMessages</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all messages in the system</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of all the messages</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Customers Created by a User */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Customers Created by a User</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCreatedCustomers/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all customers created by a specific user by user_id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of customers created by the specified user</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Tasks Created by a User */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Tasks Created by a User</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCreatedTasks/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all tasks created by a specific user by user_id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of tasks created by the specified user</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get User by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get User by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getUser/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves a specific user by using userID</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the users data</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Current User */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Current User</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCurrentUser</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves the current logged in user</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the logged in users data</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Task by Title */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Task by Title</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getTaskByTitle</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieve the task by its title</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Query Key and value:</h4>
                      <ul className="list-disc list-inside">
                        <li>title(key): task_title(value)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the task details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If customerID is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get App Version */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get App Version</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAppVersionCode</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Not Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieve Teamstar's app version</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Query Key and value:</h4>
                      <ul className="list-disc list-inside">
                        <li>platform(key): platform(value)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the version of the app depending on the platform</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If the platform's value is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DELETE Routes Section */}
            <section id="delete" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">DELETE Routes</h2>
              <div className="space-y-8">
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
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Task and related data deleted successfully
                          <ul className="list-disc list-inside ml-4">
                            <li>taskDeleted (Boolean): Indicates if the task was deleted</li>
                            <li>historyLogsDeleted (Number): Number of history logs deleted</li>
                            <li>commentsDeleted (Number): Number of comments deleted</li>
                            <li>attachmentsDeleted (Number): Number of attachments deleted</li>
                            <li>checklistDeleted (Number): Number of checklist items deleted</li>
                          </ul>
                        </li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid Task ID format</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">401 Unauthorized</code> - User is not authorized to delete the task</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - Task with the specified ID does not exist</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Delete User by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Delete User by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/deleteUser/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">DELETE</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Deletes a user by their ID.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The unique ID of the user to delete</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - User deleted successfully</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid User ID format or unauthorized role</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - User with the specified ID does not exist</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Delete Report by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Delete Report by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/deleteReport/:report_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">DELETE</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Deletes a specific report by its ID.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>report_id (String): The unique ID of the report to delete</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Report deleted successfully</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid Report ID format</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - Report with the specified ID does not exist</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* POST Routes Section */}
            <section id="post" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">POST Methods</h2>
              <div className="space-y-8">
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
                      <ul className="list-disc list-inside">
                        <li>name (String, required): Name of the customer</li>
                        <li>email (String, required): Email of the customer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">201 Created</code> - Customer organization created successfully
                          <ul className="list-disc list-inside ml-4">
                            <li>message (String): Confirmation message</li>
                            <li>customerId (Object): ID of the created customer</li>
                          </ul>
                        </li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If the user is not authorized to create a customer</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Find User's ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Find User's ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/findUserID</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">POST</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Request Body:</h4>
                      <p className="text-gray-600 mb-2">Either phone number or email is required</p>
                      <ul className="list-disc list-inside">
                        <li>phoneNumber (String, required): Phone number of the user</li>
                        <li>email (String, required): Email of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the ID of the user</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Create Report */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Create Report</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/createReport/</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">POST</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Allows only members to create a report.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Request Body:</h4>
                      <ul className="list-disc list-inside">
                        <li>title (String, required): Title of the report</li>
                        <li>description (String, required): Description of the report</li>
                        <li>customer_id (String, required): ID of the customer associated with the report</li>
                        <li>recipient (String, required): ID of the recipient</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">201 Created</code> - Report created successfully
                          <ul className="list-disc list-inside ml-4">
                            <li>message (String): Confirmation message</li>
                            <li>report (Object): ID of the created report</li>
                          </ul>
                        </li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">403 Forbidden</code> - If the user is not a member</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - If user details are not found</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ... continuing with more POST routes ... */}
              </div>
            </section>

            {/* PUT Routes Section */}
            <section id="put" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">PUT Methods</h2>
              <div className="space-y-8">
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

                {/* Update User Profile */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Update User Profile</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/updateUser/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">PUT</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Updates a user's profile information.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user to update</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Request Body:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>name (String, optional): Updated name</li>
                        <li>email (String, optional): Updated email address</li>
                        <li>phone (String, optional): Updated phone number</li>
                        <li>password (String, optional): New password</li>
                        <li>profile_picture (String, optional): URL of new profile picture</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - User profile updated successfully</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid user ID or request body</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - User not found</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Update Organization Details */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Update Organization Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/updateCustomer/:customer_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">PUT</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Updates an organization's details. Only accessible by admins and supervisors.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>customer_id (String): The ID of the organization to update</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Request Body:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>name (String, optional): Updated organization name</li>
                        <li>email (String, optional): Updated organization email</li>
                        <li>address (String, optional): Updated organization address</li>
                        <li>phone (String, optional): Updated organization phone number</li>
                        <li>logo (String, optional): URL of new organization logo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Organization details updated successfully</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - Invalid organization ID or request body</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">403 Forbidden</code> - User not authorized to update organization</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - Organization not found</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PATCH Routes Section */}
            <section id="patch" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">PATCH Methods</h2>
              <div className="space-y-8">
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
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Task updated successfully
                          <ul className="list-disc list-inside ml-4">
                            <li>message (String): Confirmation message</li>
                            <li>taskId (String): ID of the updated task</li>
                          </ul>
                        </li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">304 Not Modified</code> - No changes were made to the task</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If a non-admin tries to update the task</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">404 Not Found</code> - If the task does not exist</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Users Section */}
            <section id="users" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Users</h2>
              <div className="space-y-8">
                {/* Get User by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get User by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getUser/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves a specific user by using userID</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the users data</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Current User */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Current User</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCurrentUser</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves the current logged in user</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the logged in users data</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tasks Section */}
            <section id="tasks" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Tasks</h2>
              <div className="space-y-8">
                {/* Get Task by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Task by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getTask/:id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves a task by id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>id (String): The ID of the task</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the task details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Task by Title */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Task by Title</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getTaskByTitle</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieve the task by its title</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Query Key and value:</h4>
                      <ul className="list-disc list-inside">
                        <li>title(key): task_title(value)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the task details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If customerID is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Tasks Created by a User */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Tasks Created by a User</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCreatedTasks/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all tasks created by a specific user by user_id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of tasks created by the specified user</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Organizations Section */}
            <section id="organizations" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Organizations</h2>
              <div className="space-y-8">
                {/* Get Customer by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Customer by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCustomer/:id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves a customer by id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>id (String): The ID of the customer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the customer details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Organization Teams */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Organization Teams</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCustomerTeams/:customer_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all the teams of the organization.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>customer_id (String): The organization's customer ID</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the organization details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If customerID is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Get Customers Created by a User */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Customers Created by a User</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getCreatedCustomers/:user_id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all customers created by a specific user by user_id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>user_id (String): The ID of the user</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of customers created by the specified user</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If user_id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Attachments Section */}
            <section id="attachments" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Attachments</h2>
              <div className="space-y-8">
                {/* Get Attachment by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Attachment by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAttachment/:id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves a task attachment by id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>id (String): The ID of the attachment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the attachment details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reports Section */}
            <section id="reports" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Reports</h2>
              <div className="space-y-8">
                {/* Get Report by ID */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get Report by ID</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getReport/:id</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves a report by id.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">URL Parameters:</h4>
                      <ul className="list-disc list-inside">
                        <li>id (String): The ID of the report</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the report details</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If id is invalid</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Messages Section */}
            <section id="messages" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">Messages</h2>
              <div className="space-y-8">
                {/* Get All Messages */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Get All Messages</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAllMessages</code></p>
                      <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                      <p className="font-medium">Authentication: Required</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Description:</h4>
                      <p className="text-gray-600">Retrieves all messages in the system</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Codes:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns a list of all the messages</li>
                        <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Version Section */}
            <section id="version" className="space-y-6">
              <h2 className="text-3xl font-bold text-black">App Version</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Get App Version</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">URL: <code className="bg-gray-200 px-2 py-1 rounded">/getAppVersionCode</code></p>
                    <p className="font-medium">Method: <code className="bg-gray-200 px-2 py-1 rounded">GET</code></p>
                    <p className="font-medium">Authentication: Not Required</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Description:</h4>
                    <p className="text-gray-600">Retrieve Teamstar's app version</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Query Key and value:</h4>
                    <ul className="list-disc list-inside">
                      <li>platform(key): platform(value)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Response Codes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><code className="bg-green-100 text-green-800 px-2 py-1 rounded">200 OK</code> - Returns the version of the app depending on the platform</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">400 Bad Request</code> - If the platform's value is invalid</li>
                      <li><code className="bg-red-100 text-red-800 px-2 py-1 rounded">500 Internal Server Error</code> - On failure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 