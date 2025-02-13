# Fitness App Documentation

## Overview
The fitness app delivers personalized workout and meal plans based on users' BMI (Body Mass Index) and features a dedicated "Focus Mode" for distraction-free gym sessions. Users can track their progress and leverage AI-powered chat for adding workouts and meals.

## Tech Stack
Frontend: React Native with TypeScript, Expo, and Expo Router
Backend/Database: Supabase
UI Framework: React Native Paper
AI Processing: DeepSeek

## User Flow

### 1. Onboarding
- **Welcome Screen**: Clean, intuitive interface
- **Sign-up**: Email-based authentication
- **Dashboard Access**: Post-registration navigation

### 2. Profile Configuration
- **Required Metrics**:
  - Body weight
  - Height
- **Automated Calculations**:
  - BMI computation
  - Personalized workout recommendations
  - Custom meal planning

### 3. Main Dashboard
- **Journey Overview**: Visual progress tracking
- **Key Actions**:
  - Workout plan management
  - Meal plan customization
  - Quick-add functionality
  - AI fitness assistant

### 4. Workout & Meal Management
- **Plan Options**:
  - Pre-configured suggestions
  - Manual entry via Quick-Add
  - AI-powered recommendations

### 5. Focus Mode
- **Features**:
  - Notification blocking
  - Exercise timer
  - Session tracking

### 6. Progress Tracking
- **Post-Exercise Flow**:
  - Progress visualization
  - Rest period options
  - Performance insights

## Core Features

### 1. Smart Fitness Planning
- AI-driven recommendations
- Customizable workout/meal plans
- BMI-based personalization

### 2. Quick Actions & AI Support
- Streamlined manual entry
- Real-time AI fitness guidance
- Natural language interaction

### 3. Focus Mode
- Distraction management
- Integrated timer
- Session monitoring

### 4. Progress Analytics
- Real-time performance metrics
- Progress visualization
- Motivation tracking

### 5. UX/UI Design
- Intuitive navigation
- Streamlined interface
- Quick-access features

## Technical Implementation

### Technology Stack
- **Frontend Options**:
  - Flutter
  - React Native

- **Backend Options**:
  - Node.js
  - Firebase
  - AWS

### Key Components
- **AI Integration**: OpenAI API/NLP implementation
- **Data Management**: Secure user data storage
- **Notifications**: Workout/meal reminders
- **Appearance**: Dark mode support

## Development Roadmap

### Phase 1: Project Setup & Authentication (1-2 weeks)
1. Initialize project with Expo and TypeScript
2. Set up Supabase project and database tables
3. Implement basic authentication flow
   - Login screen
   - Registration screen
   - Password reset functionality
4. Create basic navigation structure using Expo Router

### Phase 2: User Profile & BMI Calculator (1 week)
1. Implement user profile setup screens
2. Create BMI calculation functionality
3. Build profile editing features
4. Set up data persistence with Supabase

### Phase 3: Workout Management (2 weeks)
1. Create workout listing interface
2. Implement workout creation/editing
3. Build exercise management within workouts
4. Add workout tracking functionality
5. Integrate with Supabase real-time updates

### Phase 4: Meal Planning (2 weeks)
1. Develop meal planning interface
2. Create meal logging functionality
3. Implement nutritional tracking
4. Add meal history and statistics
5. Set up meal recommendations based on BMI

### Phase 5: Focus Mode (1 week)
1. Implement notification management
2. Create workout timer functionality
3. Build session tracking
4. Add progress logging during sessions

### Phase 6: AI Integration (1-2 weeks)
1. Set up DeepSeek AI integration
2. Implement natural language processing for workout/meal additions
3. Create AI-powered recommendation system
4. Build conversational interface for fitness guidance

### Phase 7: Progress Tracking (1 week)
1. Implement progress visualization
2. Create statistics dashboard
3. Add goal tracking functionality
4. Build progress sharing features

### Phase 8: Testing & Polish (1-2 weeks)
1. Implement unit tests
2. Perform integration testing
3. Conduct user acceptance testing
4. Bug fixes and performance optimization
5. UI/UX refinements

### Phase 9: Deployment (1 week)
1. Final testing on both iOS and Android
2. App store preparation
3. Documentation completion
4. Production deployment

## Getting Started

To begin development:

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
```bash
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
DEEPSEEK_API_KEY=your_deepseek_key
```
4. Start the development server:
```bash
npm start
```

Would you like to begin with Phase 1? I can help you set up the project structure and implement the authentication flow.

## Database Schema

### Tables

#### users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  height DECIMAL(5,2),
  weight DECIMAL(5,2),
  bmi DECIMAL(4,2),
  goal_weight DECIMAL(5,2),
  activity_level VARCHAR(50),
  fitness_goal VARCHAR(50)
);
```

#### workouts
```sql
CREATE TABLE workouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  duration INTEGER,
  calories_burned INTEGER,
  date_completed TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### exercises
```sql
CREATE TABLE exercises (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workout_id UUID REFERENCES workouts(id),
  name VARCHAR(100) NOT NULL,
  sets INTEGER,
  reps INTEGER,
  weight DECIMAL(6,2),
  duration INTEGER,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### meals
```sql
CREATE TABLE meals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(100) NOT NULL,
  calories INTEGER,
  protein DECIMAL(6,2),
  carbs DECIMAL(6,2),
  fats DECIMAL(6,2),
  date_consumed TIMESTAMP WITH TIME ZONE,
  meal_type VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

#### progress_tracking
```sql
CREATE TABLE progress_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  weight DECIMAL(5,2),
  bmi DECIMAL(4,2),
  measurement_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  notes TEXT
);
```

#### focus_sessions
```sql
CREATE TABLE focus_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  workout_id UUID REFERENCES workouts(id),
  start_time TIMESTAMP WITH TIME ZONE,
  end_time TIMESTAMP WITH TIME ZONE,
  duration INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Project Structure
```
fitness-app/
├── app/                      # Expo Router app directory
│   ├── (auth)/              # Authentication routes
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   └── forgot-password.tsx
│   ├── (tabs)/              # Main app tabs
│   │   ├── home/
│   │   ├── workouts/
│   │   ├── meals/
│   │   └── profile/
│   └── _layout.tsx          # Root layout
├── src/
│   ├── components/          # Reusable components
│   │   ├── common/          # Shared components
│   │   ├── workouts/        # Workout-specific components
│   │   └── meals/           # Meal-specific components
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API and external services
│   │   ├── supabase.ts      # Supabase client
│   │   └── ai.ts            # AI integration
│   ├── utils/               # Helper functions
│   ├── types/               # TypeScript types
│   └── constants/           # App constants
├── assets/                  # Static assets
│   ├── images/
│   └── fonts/
├── config/                  # Configuration files
├── tests/                  # Test files
├── app.json               # Expo config
├── babel.config.js        # Babel config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies and scripts
```

### Key Directories Explained
- **/app**: Routes using Expo Router
- **/src/components**: Reusable UI components
- **/src/hooks**: Custom React hooks
- **/src/services**: External service integrations
- **/src/utils**: Helper functions
- **/src/types**: TypeScript definitions
- **/assets**: Static files

### Component Organization
- **common/**: Shared components (buttons, inputs, cards)
- **workouts/**: Workout-specific components
- **meals/**: Meal-specific components

### State Management
- React Context for global state
- Local state for component-specific data
- Supabase for real-time data sync

### Testing Structure
```
tests/
├── components/            # Component tests
├── hooks/                # Custom hooks tests
├── utils/                # Utility function tests
└── e2e/                  # End-to-end tests
```
```
