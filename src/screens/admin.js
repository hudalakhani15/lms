import React from 'react';
import Drawer from '../components/Drawer';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import RegdStudents from './admin_screens/regdstudents';
import Courseform from '../screens/admin_screens/courseform';
import QuizForm from './admin_screens/quizform';
import CreateResult from '../screens/admin_screens/createresult';


export default function Admin() {

    return (
        <>
            <Box>
                <Drawer dataSource={[
                    {
                        name: 'Students',
                        icon: <GroupsIcon />,
                        to: '/admin/regdstudents',
                    },
                    {
                        name: 'Courses',
                        icon: <AutoAwesomeMotionIcon />,
                        to: '/admin/courseform',
                    },
                    {
                        name: 'Quizzes',
                        icon: <QuizIcon />,
                        to: '/admin/quizform',
                    },
                    {
                        name: 'Results',
                        icon: <SchoolIcon />,
                        to: '/admin/createresult',
                    },
                ]}

                    // All Nested Routes
                    nestedRoutes={
                        <Routes>
                            <Route path="regdstudents" element={<RegdStudents />} />
                            <Route path="courseform" element={<Courseform />} />
                            <Route path="quizform" element={<QuizForm />} />
                            <Route path="createresult" element={<CreateResult />} />
                        </Routes>
                    }
                />
            </Box>
        </>
    )
}