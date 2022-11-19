import React from 'react';
import Drawer from '../components/Drawer';
import GroupsIcon from '@mui/icons-material/Groups';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';

import Message from './admin_screens/Message';
import Notifications from './admin_screens/notifications';
import Feedback from './admin_screens/Feedback';


export default function Admin() {

    return (
        <>
            <Box>
                <Drawer dataSource={[
                    {
                        name: 'Message',
                        icon: <GroupsIcon />,
                        to: '/admin/message',
                    },
                    {
                        name: 'Notifications',
                        icon: <QuizIcon />,
                        to: '/admin/notifications',
                    },
                    {
                        name: 'Feedback',
                        icon: <SchoolIcon />,
                        to: '/admin/feedback',
                    },
                ]}

                    // All Nested Routes
                    nestedRoutes={
                        <Routes>
                            <Route path="message" element={<Message />} /> 
                            <Route path="notifications" element={<Notifications/>} />
                            <Route path="feedback" element={<Feedback />} />
                        </Routes>
                    }
                />
            </Box>
        </>
    )
}