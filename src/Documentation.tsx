import React from 'react';
import { useTranslation } from './translations.tsx';
import { Link } from 'react-router-dom';
import { 
  FileText, Key, Users, MessageSquareMore, Smartphone,
  CheckCircle, AlertCircle, XCircle, Globe, Shield, Database,
  Terminal, Building, Paperclip, BarChart, MessageSquare
} from 'lucide-react';

interface EndpointParam {
  [key: string]: string;
}

interface ResponseCode {
  status: number;
  description: string;
}

const Documentation: React.FC = () => {
  const { t } = useTranslation();

  const renderEndpoint = (
    method: string,
    path: string,
    description: string,
    auth: string,
    urlParams?: EndpointParam,
    queryParams?: EndpointParam,
    requestBody?: EndpointParam,
    responseCodes?: ResponseCode[],
    responseBody?: EndpointParam
  ) => {
    return (
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="space-y-4">
          <div>
            <h5 className="font-medium text-black">URL: {path}</h5>
            <h5 className="font-medium text-black">Method: {method}</h5>
            <h5 className="font-medium text-black">Authentication: {auth}</h5>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>

          {urlParams && (
            <div>
              <h6 className="font-medium text-black mb-2">URL Parameters:</h6>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {Object.entries(urlParams).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          )}

          {queryParams && (
            <div>
              <h6 className="font-medium text-black mb-2">Query Parameters:</h6>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {Object.entries(queryParams).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          )}

          {requestBody && (
            <div>
              <h6 className="font-medium text-black mb-2">Request Body:</h6>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {Object.entries(requestBody).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          )}

          {responseBody && (
            <div>
              <h6 className="font-medium text-black mb-2">Response:</h6>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {Object.entries(responseBody).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          )}

          {responseCodes && (
            <div>
              <h6 className="font-medium text-black mb-2">Response Codes:</h6>
              <ul className="space-y-2">
                {responseCodes.map((code, index) => (
                  <li key={index} className={`flex items-center ${
                    code.status >= 200 && code.status < 300 ? 'text-green-600' :
                    code.status >= 300 && code.status < 400 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {code.status >= 200 && code.status < 300 ? <CheckCircle className="w-4 h-4 mr-2" /> :
                     code.status >= 300 && code.status < 400 ? <AlertCircle className="w-4 h-4 mr-2" /> :
                     <XCircle className="w-4 h-4 mr-2" />}
                    {code.status} - {code.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-gray-600 hover:text-black transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('nav.home')}
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-black mb-6">TEAMSTAR API Documentation</h1>
          
          <div className="prose prose-lg max-w-none">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Overview
              </h2>
              <p className="text-gray-600 mb-4">
                This API provides endpoints for a task management system to manage users, tasks, reports, and attachments. The API is secured using JWT-based authentication.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-black mb-4">Base URL</h3>
                <code className="bg-black text-white px-4 py-2 rounded-lg block text-sm">
                  https://teamstar-api.d3.net/api/
                </code>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Authentication Middleware
                </h3>
                <p className="text-gray-600">
                  This middleware validates the JWT token sent in the request's authorization header. If valid, it adds the user's details to req.user and calls the next middleware; otherwise, it returns a 401 Unauthorized or 403 Forbidden response.
                </p>
              </div>
            </section>

            {/* Authentication Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
                <Key className="w-6 h-6 mr-2" />
                Authentication
              </h2>
              
              {renderEndpoint(
                'POST',
                '/login',
                'Authenticates a user with either their email or phone number and PIN, returning a JWT token if successful.',
                'Required',
                undefined,
                undefined,
                {
                  'phone (String)': 'User\'s phone number (required)',
                  'password (String)': 'User\'s password (required)',
                  'email (String)': 'User\'s Email address (required)'
                },
                [
                  { status: 200, description: 'Returns access token on successful login' },
                  { status: 404, description: 'If user does not exist' },
                  { status: 403, description: 'If PIN is invalid' }
                ]
              )}
            </section>

            {/* API Endpoints Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2" />
                API Endpoints
              </h2>

              {/* GET Routes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  GET Routes
                </h3>

                {/* Users Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Users
                  </h4>
                  
                  {renderEndpoint(
                    'GET',
                    '/getAllUsers',
                    'Retrieves all users in the system.',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of users' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getUser/:user_id',
                    'Retrieves a specific user by using userID',
                    'Required',
                    { 'user_id (String)': 'The ID of the user' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns the users data' },
                      { status: 400, description: 'If user_id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getCurrentUser',
                    'Retrieves the current logged in user',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns the logged in users data' },
                      { status: 400, description: 'If user_id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>

                {/* Tasks Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Tasks
                  </h4>

                  {renderEndpoint(
                    'GET',
                    '/getAllTasks',
                    'Retrieves all tasks in the system.',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of tasks' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getOrganizationTask/:customer_id',
                    'Retrieves tasks assigned to a specific organization (by customer_id).',
                    'Required',
                    { 'customer_id (String)': 'The organization\'s ID' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of tasks for the specified organization' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getTaskByTitle',
                    'Retrieve the task by its title',
                    'Required',
                    undefined,
                    { 'title': 'task_title' },
                    undefined,
                    [
                      { status: 200, description: 'Returns the task details' },
                      { status: 400, description: 'If customerID is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getCreatedTasks/:user_id',
                    'Retrieves all tasks created by a specific user by user_id.',
                    'Required',
                    { 'user_id (String)': 'The ID of the user' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of tasks created by the specified user' },
                      { status: 400, description: 'If user_id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>

                {/* Organizations Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Organizations
                  </h4>

                  {renderEndpoint(
                    'GET',
                    '/getAllCustomers',
                    'Retrieves all customers.',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of customers' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getCustomer/:id',
                    'Retrieves a customer by id.',
                    'Required',
                    { 'id (String)': 'The ID of the customer' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns the customer details' },
                      { status: 400, description: 'If id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getCustomerTeams/:customer_id',
                    'Retrieves all the teams of the organization.',
                    'Required',
                    { 'customer_id (String)': 'The organization\'s customer ID' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns the organization details' },
                      { status: 400, description: 'If customerID is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getCreatedCustomers/:user_id',
                    'Retrieves all customers created by a specific user by user_id.',
                    'Required',
                    { 'user_id (String)': 'The ID of the user' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of customers created by the specified user' },
                      { status: 400, description: 'If user_id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>

                {/* Attachments Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <Paperclip className="w-5 h-5 mr-2" />
                    Attachments
                  </h4>

                  {renderEndpoint(
                    'GET',
                    '/getAllAttachments',
                    'Retrieves all task attachments.',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of attachments' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getTaskAttachments/:task_id',
                    'Retrieves attachments for a specific task by task_id.',
                    'Required',
                    { 'task_id (String)': 'The ID of the task' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of attachments for the specified task' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getAttachment/:id',
                    'Retrieves a task attachment by id.',
                    'Required',
                    { 'id (String)': 'The ID of the attachment' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns the attachment details' },
                      { status: 400, description: 'If id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>

                {/* Reports Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <BarChart className="w-5 h-5 mr-2" />
                    Reports
                  </h4>

                  {renderEndpoint(
                    'GET',
                    '/getAllReports',
                    'Retrieves all reports.',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of reports' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getCustomerReports/:customer_id',
                    'Retrieves all reports for a specific organization by customer_id.',
                    'Required',
                    { 'customer_id (String)': 'The ID of the organization' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of reports for the specified organization' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}

                  {renderEndpoint(
                    'GET',
                    '/getReport/:id',
                    'Retrieves a report by id.',
                    'Required',
                    { 'id (String)': 'The ID of the report' },
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns the report details' },
                      { status: 400, description: 'If id is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>

                {/* Messages Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <MessageSquareMore className="w-5 h-5 mr-2" />
                    Messages
                  </h4>

                  {renderEndpoint(
                    'GET',
                    '/getAllMessages',
                    'Retrieves all messages in the system',
                    'Required',
                    undefined,
                    undefined,
                    undefined,
                    [
                      { status: 200, description: 'Returns a list of all the messages' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>

                {/* App Version Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    App Version
                  </h4>

                  {renderEndpoint(
                    'GET',
                    '/getAppVersionCode',
                    'Retrieve Teamstar\'s app version',
                    'Not Required',
                    undefined,
                    { 'platform': 'platform' },
                    undefined,
                    [
                      { status: 200, description: 'Returns the version of the app depending on the platform' },
                      { status: 400, description: 'If the platform\'s value is invalid' },
                      { status: 500, description: 'Internal Server Error' }
                    ]
                  )}
                </div>
              </div>

              {/* POST Routes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  POST Routes
                </h3>

                {renderEndpoint(
                  'POST',
                  '/createCustomer/',
                  'Creates a new customer organization by an admin or supervisor.',
                  'Required',
                  undefined,
                  undefined,
                  {
                    'name (String)': 'Name of the customer (required)',
                    'email (String)': 'Email of the customer (required)'
                  },
                  [
                    { status: 201, description: 'Customer organization created successfully' },
                    { status: 400, description: 'If the user is not authorized to create a customer' },
                    { status: 500, description: 'Internal Server Error' }
                  ],
                  {
                    'message (String)': 'Confirmation message',
                    'customerId (Object)': 'ID of the created customer'
                  }
                )}

                {renderEndpoint(
                  'POST',
                  '/findUserID',
                  'Finds a user\'s ID by phone number or email.',
                  'Required',
                  undefined,
                  undefined,
                  {
                    'phoneNumber (String)': 'Phone number of the user (required)',
                    'email (String)': 'Email of the user (required)'
                  },
                  [
                    { status: 200, description: 'Returns the ID of the user' },
                    { status: 500, description: 'Internal Server Error' }
                  ]
                )}

                {renderEndpoint(
                  'POST',
                  '/createReport/',
                  'Allows only members to create a report.',
                  'Required',
                  undefined,
                  undefined,
                  {
                    'title (String)': 'Title of the report (required)',
                    'description (String)': 'Description of the report (required)',
                    'customer_id (String)': 'ID of the customer associated with the report (required)',
                    'recipient (String)': 'ID of the recipient (required)'
                  },
                  [
                    { status: 201, description: 'Report created successfully' },
                    { status: 403, description: 'If the user is not a member' },
                    { status: 404, description: 'If user details are not found' },
                    { status: 500, description: 'Internal Server Error' }
                  ],
                  {
                    'message (String)': 'Confirmation message',
                    'report (Object)': 'ID of the created report'
                  }
                )}
              </div>

              {/* PUT Routes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  PUT Routes
                </h3>

                {renderEndpoint(
                  'PUT',
                  '/updateTask/:task_id',
                  'Updates an existing task\'s details.',
                  'Required',
                  { 'task_id (String)': 'The ID of the task to update' },
                  undefined,
                  {
                    'title (String)': 'New title for the task (optional)',
                    'description (String)': 'New description for the task (optional)',
                    'status (String)': 'New status for the task (optional)',
                    'priority (String)': 'New priority level (optional)',
                    'due_date (Date)': 'New due date for the task (optional)',
                    'assigned_to (String)': 'ID of the user to assign the task to (optional)'
                  },
                  [
                    { status: 200, description: 'Task updated successfully' },
                    { status: 400, description: 'Invalid task ID or request body' },
                    { status: 404, description: 'Task not found' },
                    { status: 500, description: 'Internal Server Error' }
                  ]
                )}

                {renderEndpoint(
                  'PUT',
                  '/updateUser/:user_id',
                  'Updates a user\'s profile information.',
                  'Required',
                  { 'user_id (String)': 'The ID of the user to update' },
                  undefined,
                  {
                    'name (String)': 'Updated name (optional)',
                    'email (String)': 'Updated email address (optional)',
                    'phone (String)': 'Updated phone number (optional)',
                    'password (String)': 'New password (optional)',
                    'profile_picture (String)': 'URL of new profile picture (optional)'
                  },
                  [
                    { status: 200, description: 'User profile updated successfully' },
                    { status: 400, description: 'Invalid user ID or request body' },
                    { status: 404, description: 'User not found' },
                    { status: 500, description: 'Internal Server Error' }
                  ]
                )}

                {renderEndpoint(
                  'PUT',
                  '/updateCustomer/:customer_id',
                  'Updates an organization\'s details. Only accessible by admins and supervisors.',
                  'Required',
                  { 'customer_id (String)': 'The ID of the organization to update' },
                  undefined,
                  {
                    'name (String)': 'Updated organization name (optional)',
                    'email (String)': 'Updated organization email (optional)',
                    'address (String)': 'Updated organization address (optional)',
                    'phone (String)': 'Updated organization phone number (optional)',
                    'logo (String)': 'URL of new organization logo (optional)'
                  },
                  [
                    { status: 200, description: 'Organization details updated successfully' },
                    { status: 400, description: 'Invalid organization ID or request body' },
                    { status: 403, description: 'User not authorized to update organization' },
                    { status: 404, description: 'Organization not found' },
                    { status: 500, description: 'Internal Server Error' }
                  ]
                )}
              </div>

              {/* DELETE Routes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  DELETE Routes
                </h3>

                {renderEndpoint(
                  'DELETE',
                  '/deleteTask/:id',
                  'Deletes a task by its ID, along with associated data, such as history logs, comments, attachments, and checklist items.',
                  'Required',
                  { 'id (String)': 'The unique ID of the task to delete' },
                  undefined,
                  undefined,
                  [
                    { status: 200, description: 'Task and related data deleted successfully' },
                    { status: 400, description: 'Invalid Task ID format' },
                    { status: 401, description: 'User is not authorized to delete the task' },
                    { status: 404, description: 'Task with the specified ID does not exist' },
                    { status: 500, description: 'Internal Server Error' }
                  ],
                  {
                    'taskDeleted (Boolean)': 'Indicates if the task was deleted',
                    'historyLogsDeleted (Number)': 'Number of history logs deleted',
                    'commentsDeleted (Number)': 'Number of comments deleted',
                    'attachmentsDeleted (Number)': 'Number of attachments deleted',
                    'checklistDeleted (Number)': 'Number of checklist items deleted'
                  }
                )}

                {renderEndpoint(
                  'DELETE',
                  '/deleteUser/:user_id',
                  'Deletes a user by their ID.',
                  'Required',
                  { 'user_id (String)': 'The unique ID of the user to delete' },
                  undefined,
                  undefined,
                  [
                    { status: 200, description: 'User deleted successfully' },
                    { status: 400, description: 'Invalid User ID format or unauthorized role' },
                    { status: 404, description: 'User with the specified ID does not exist' },
                    { status: 500, description: 'Internal Server Error' }
                  ]
                )}

                {renderEndpoint(
                  'DELETE',
                  '/deleteReport/:report_id',
                  'Deletes a specific report by its ID.',
                  'Required',
                  { 'report_id (String)': 'The unique ID of the report to delete' },
                  undefined,
                  undefined,
                  [
                    { status: 200, description: 'Report deleted successfully' },
                    { status: 400, description: 'Invalid Report ID format' },
                    { status: 404, description: 'Report with the specified ID does not exist' },
                    { status: 500, description: 'Internal Server Error' }
                  ]
                )}
              </div>

              {/* PATCH Routes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  PATCH Routes
                </h3>

                {renderEndpoint(
                  'PATCH',
                  '/changeUserRole/:target_id',
                  'Toggles the role of a member to supervisor and vice versa',
                  'Required',
                  { 'target_id (String)': 'The ID of the user' },
                  undefined,
                  undefined,
                  [
                    { status: 200, description: 'Task updated successfully' },
                    { status: 304, description: 'No changes were made to the task' },
                    { status: 400, description: 'If a non-admin tries to update the task' },
                    { status: 404, description: 'If the task does not exist' },
                    { status: 500, description: 'Internal Server Error' }
                  ],
                  {
                    'message (String)': 'Confirmation message',
                    'taskId (String)': 'ID of the updated task'
                  }
                )}
              </div>
            </section>

            {/* Help Section */}
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                If you need assistance with the API or have any questions, our support team is here to help.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:support@teamstar.me" 
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="https://github.com/teamstar/api-examples" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block ml-4 text-black hover:text-gray-600 transition-colors"
                >
                  View API Examples on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 