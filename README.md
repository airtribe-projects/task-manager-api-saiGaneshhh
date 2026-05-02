# Task Manager API

## Overview

A simple Express.js API for managing tasks using in-memory data loaded from `task.json`. The API supports basic CRUD operations for tasks.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node app.js
   ```

3. Open the API at:
   ``text
   http://localhost:3000
``

## API Endpoints

### GET /tasks
Retrieve all tasks.

Test with:
```bash
curl http://localhost:3000/tasks
```

### GET /tasks/:id
Retrieve a task by its ID.

Test with:
```bash
curl http://localhost:3000/tasks/1
```

### POST /tasks
Create a new task.

Request body:
```json
{
  "title": "New task",
  "description": "Task details",
  "completed": false
}
```

Test with:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"New task","description":"Task details","completed":false}'
```

### PUT /tasks/:id
Update an existing task by ID.

Request body can include any task fields:
```json
{
  "title": "Updated title",
  "completed": true
}
```

Test with:
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title","completed":true}'
```

### DELETE /tasks/:id
Delete a task by ID.

Test with:
```bash
curl -X DELETE http://localhost:3000/tasks/1
```