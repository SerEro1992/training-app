import Home from '../components/screens/Home/Home';
import Auth from '../components/screens/auth/Auth';
import NewExercise from '../components/screens/new-exercise/NewExercise';
import NewWorkout from '../components/screens/newWorkout/NewWorkout';
import Profile from '../components/screens/profile/Profile';

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true,
	}

	// {
	// 	path: '/workout/:id',

	// 	component: SingleWorkout,
	// 	isAuth: true,
	// },
	// {
	// 	path: '/workouts',

	// 	component: ListWorkouts,
	// 	isAuth: true,
	// },
	// {
	// 	path: '/exercise/:id',

	// 	component: SingleExercise,
	// 	isAuth: true,
	// }
]
