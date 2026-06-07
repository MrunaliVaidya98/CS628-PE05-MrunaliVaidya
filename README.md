# CS628-PE05-MrunaliVaidya# Input

The Recipe Finder application accepts recipe information from users, including the recipe name, ingredients, cooking instructions, and cooking time. Users can also select an existing recipe from the recipe list to view its details, update the recipe, or delete it from the system. The user input is entered through React forms and sent to the backend API.

# Process

The frontend is built with React and React Router. React Router manages navigation between the recipe list, add recipe, recipe details, and edit recipe pages. The frontend uses fetch requests to communicate with the Node.js and Express backend. The backend receives API requests and uses the MongoDB Node.js driver to store, retrieve, update, and delete recipe data in MongoDB Atlas. The useParams hook is used to identify and display a specific recipe based on its unique ID.

# Output

The application displays a list of recipes, detailed information for a selected recipe, and updated recipe data after users add, edit, or delete recipes. The output is shown in a user-friendly web interface and the data is stored in MongoDB Atlas.

## How to Run

### Backend

```bash
cd backend
cp config.env.example config.env
# Edit config.env with your MongoDB Atlas username, password, and cluster URL
npm install
npm start
```

### Frontend

```bash
cd frontend
cp .env.example .env
# Edit .env with your Codespaces 5050 backend URL ending in /recipe, or use proxy locally
npm install
npm start
```

## Screenshot Checklist

- Recipe List page
- Add Recipe page
- Recipe Details page
- Edit Recipe page
- Delete functionality
- MongoDB Atlas collection showing recipes
