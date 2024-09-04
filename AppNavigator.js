
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity,Alert,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
// Import your screens
import Frame1 from './Frame1'; // Your home screen
import AcademicsScreen from './AcademicsScreen';
import StudentSupportScreen from './StudentSupportScreen';
import AdminScreen from './AdminScreen';
import ExtracurricularScreen from './ExtracurricularScreen';
import ResourcesScreen from './ResourcesScreen';
import CoursesOnOfferScreen from './CoursesOnOfferScreen';
import CourseInfoScreen from './CourseInfoScreen';
import CourseRegistrationScreen from './CourseRegistrationScreen';
import ResearchProgramsScreen from './ResearchProgramsScreen';
import ResearchInfoScreen from './ResearchInfoScreen';
import TechnicalSupportScreen from './TechnicalSupportScreen';
import ChatbotScreen from './ChatbotScreen';
import ContactInfoScreen from './ContactInfoScreen';
import SupportRequestScreen from './SupportRequestScreen';
import CounselingServicesScreen from './CounselingServicesScreen';
import CounselingServicesOverviewScreen from './CounselingServicesOverviewScreen';
import CounselorProfileScreen from './CounselorProfileScreen';
import AppointmentBookingScreen from './AppointmentBookingScreen';
import LiveChatScreen from './LiveChatScreen';
import CoResourcesScreen from './CoResourcesScreen';
import FeesPaymentScreen from './FeesPaymentScreen';
import UniversityPoliciesScreen from './UniversityPoliciesScreen';
import QuotationsScreen from './QuotationsScreen';
import OpportunitiesScreen from './OpportunitiesScreen';
import OpportunityDetailScreen from'./OpportunityDetailScreen'
import ScholarshipsAndGrantsScreen from'./ScholarshipsAndGrantsScreen'
import ScholarshipDetailScreen from './ScholarshipDetailScreen'
import ClubsAndSocietiesScreen from './ClubsAndSocietiesScreen'
import ClubDetailScreen from './ClubDetailScreen'
import EventsAndWorkshopsScreen from './EventsAndWorkshopsScreen'
import EventDetailScreen from './EventDetailScreen'
import SportsAndRecreationScreen from './SportsAndRecreationScreen'
import SportDetailScreen from './SportDetailScreen'
import LibraryServicesScreen from './LibraryServicesScreen'
import AccommodationScreen from './AccommodationScreen'
import OffCampusScreen from './OffCampusScreen'
import OnCampusScreen from './OnCampusScreen'
import AlumniScreen from './AlumniScreen'
import DiscussionForumsScreen from './DiscussionForumsScreen'
import MapScreen from './MapScreen'
import StudentProfileScreen from './StudentProfileScreen'
import HeaderRight from './HeaderRight'
import ResultsScreen from './ResultsScreen'
import CourseAssessmentScreen from './CourseAssessmentScreen'
import RegistrationStatusScreen from './RegistrationStatusScreen'
import DigitalIDScreen from './DigitalIDScreen'
import LoginScreen from './LoginScreen'
import CounselingServiceDetailsScreen from './CounselingServiceDetailsScreen'
import ResourceDetailScreen from './ResourceDetailScreen'
import PolicyDetailsScreen from './PolicyDetailsScreen'
import QuotationsDetailsScreen from './QuotationsDetailsScreen'
import DigitalResourcesScreen from './DigitalResourcesScreen'
import HouseDetailScreen from './HouseDetailScreen'
import ForumDetailsScreen from './ForumDetailsScreen'
import AlumniDirectoryScreen from './AlumniDirectoryScreen'
import AlumniProfileScreen from './AlumniProfileScreen'
import StudyRoomBookingScreen from './StudyRoomBookingScreen'
import LogoutScreen from './LogoutScreen'
import ELearningStack from './ElearningStack'
import CalendarScreen from './CalendarScreen'
import AnnDetailScreen from './AnnDetailScreen'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//God will work it out
function AcademicsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0033A0',
        },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen
        name="Academic"
        component={AcademicsScreen}
        options={{
          headerShown: false,
          headerTitle: 'Academics',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="CoursesOnOffer"
        component={CoursesOnOfferScreen}
        options={{
          headerTitle: 'Courses on Offer',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="CourseInfo"
        component={CourseInfoScreen}
        options={{
          headerTitle: 'Course Information',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="CourseReg"
        component={CourseRegistrationScreen}
        options={{
          headerTitle: 'Course Registration',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="ResearchP"
        component={ResearchProgramsScreen}
        options={{
          headerTitle: 'Research Programs',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
       <Stack.Screen
              name="StudentProfile"
              component={StudentProfileScreen}
              options={{
                headerTitle: 'Student Profile',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
      <Stack.Screen
        name="ResearchInfo"
        component={ResearchInfoScreen}
        options={{
          headerTitle: 'Research Programs',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function StudentSupportStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0033A0',
        },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen
        name="StudentSupport"
        component={StudentSupportScreen}
        options={{
          headerShown: true,
          headerTitle: 'Student Support',
          headerStyle: {
            backgroundColor: '#d06009', // UZ blue color for the header
          },
          headerTintColor: '#FFFFFF', // White color for header text
        }}
      />
       <Stack.Screen
              name="StudentProfile"
              component={StudentProfileScreen}
              options={{
                headerTitle: 'Student Profile',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
      <Stack.Screen
        name="TechSupport"
        component={TechnicalSupportScreen}
        options={{
          headerTitle: 'Technical Support',
          headerStyle: {
            backgroundColor: '#d06009', // UZ blue color for the header
          },
          headerTintColor: '#FFFFFF', // White color for header text
        }}
      />
      <Stack.Screen
              name="ChatBot"
              component={ChatbotScreen}
              options={{
                headerTitle: 'Chat Bot',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
              <Stack.Screen
                          name="SupportReq"
                          component={SupportRequestScreen}
                          options={{
                            headerTitle: 'Support Request',
                            headerStyle: {
                              backgroundColor: '#d06009', // UZ blue color for the header
                            },
                            headerTintColor: '#FFFFFF', // White color for header text
                          }}
                        />
     <Stack.Screen
                             name="Counseling"
                             component={CounselingServicesScreen}
                             options={{
                               headerTitle: 'Support Request',
                               headerStyle: {
                                 backgroundColor: '#d06009', // UZ blue color for the header
                               },
                               headerTintColor: '#FFFFFF', // White color for header text
                             }}
                           />
             <Stack.Screen
                               name="CounselingServicesOverview"
                               component={CounselingServicesOverviewScreen}
                               options={{
                                 headerTitle: 'Services Overview',
                                 headerStyle: {
                                   backgroundColor: '#d06009', // UZ blue color for the header
                                 },
                                 headerTintColor: '#FFFFFF', // White color for header text
                               }}
                             />
          <Stack.Screen
                                       name="CounselingServiceDetails"
                                       component={CounselingServiceDetailsScreen}
                                       options={{
                                         headerTitle: 'Services Overview',
                                         headerStyle: {
                                           backgroundColor: '#d06009', // UZ blue color for the header
                                         },
                                         headerTintColor: '#FFFFFF', // White color for header text
                                       }}
                                     />
      <Stack.Screen
                                    name="CounselorProfiles"
                                    component={CounselorProfileScreen}
                                    options={{
                                      headerTitle: 'Counselor Profiles',
                                      headerStyle: {
                                        backgroundColor: '#d06009', // UZ blue color for the header
                                      },
                                      headerTintColor: '#FFFFFF', // White color for header text
                                    }}
                                  />
        <Stack.Screen
                                         name="ResourceDetail"
                                         component={ResourceDetailScreen}
                                         options={{
                                           headerTitle: 'Counselor Profiles',
                                           headerStyle: {
                                             backgroundColor: '#d06009', // UZ blue color for the header
                                           },
                                           headerTintColor: '#FFFFFF', // White color for header text
                                         }}
                                       />
      <Stack.Screen
                                         name="AppointmentBooking"
                                         component={AppointmentBookingScreen}
                                         options={{
                                           headerTitle: 'Appointment Booking',
                                           headerStyle: {
                                             backgroundColor: '#d06009', // UZ blue color for the header
                                           },
                                           headerTintColor: '#FFFFFF', // White color for header text
                                         }}
                                       />
<Stack.Screen
                                         name="LiveChat"
                                         component={LiveChatScreen}
                                         options={{
                                           headerTitle: 'Live Chat',
                                           headerStyle: {
                                             backgroundColor: '#d06009', // UZ blue color for the header
                                           },
                                           headerTintColor: '#FFFFFF', // White color for header text
                                         }}
                                       />
  <Stack.Screen
                                           name="CResources"
                                           component={CoResourcesScreen}
                                           options={{
                                             headerTitle: 'Resources',
                                             headerStyle: {
                                               backgroundColor: '#d06009', // UZ blue color for the header
                                             },
                                             headerTintColor: '#FFFFFF', // White color for header text
                                           }}
                                         />
   <Stack.Screen
                                             name="Opportunities"
                                             component={OpportunitiesScreen}
                                             options={{
                                               headerTitle: 'Opportunities',
                                               headerStyle: {
                                                 backgroundColor: '#d06009', // UZ blue color for the header
                                               },
                                               headerTintColor: '#FFFFFF', // White color for header text
                                             }}
                                           />
   <Stack.Screen
                                               name="OpportunityDets"
                                               component={OpportunityDetailScreen}
                                               options={{
                                                 headerTitle: 'Opportunities Details',
                                                 headerStyle: {
                                                   backgroundColor: '#d06009', // UZ blue color for the header
                                                 },
                                                 headerTintColor: '#FFFFFF', // White color for header text
                                               }}
                                             />
    <Stack.Screen
                                                  name="Scholarships"
                                                  component={ScholarshipsAndGrantsScreen}
                                                  options={{
                                                    headerTitle: 'Scholarships and Grants ',
                                                    headerStyle: {
                                                      backgroundColor: '#d06009', // UZ blue color for the header
                                                    },
                                                    headerTintColor: '#FFFFFF', // White color for header text
                                                  }}
                                                />
  <Stack.Screen
                                                    name="ScholarshipDets"
                                                    component={ScholarshipDetailScreen}
                                                    options={{
                                                      headerTitle: 'Scholarships and Grants ',
                                                      headerStyle: {
                                                        backgroundColor: '#d06009', // UZ blue color for the header
                                                      },
                                                      headerTintColor: '#FFFFFF', // White color for header text
                                                    }}
                                                  />

    </Stack.Navigator>
  );
}
function AdminStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0033A0', // UZ blue color for the header
        },
        headerTintColor: '#FFFFFF', // White color for header text
      }}
    >
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          headerShown: false,
          headerTitle: 'Admin',
          headerStyle: {
            backgroundColor: '#d06009', // UZ blue color for the header
          },
          headerTintColor: '#FFFFFF', // White color for header text
        }}
      />
       <Stack.Screen
              name="StudentProfile"
              component={StudentProfileScreen}
              options={{
                headerTitle: 'Student Profile',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
         <Stack.Screen
              name="Fees"
              component={FeesPaymentScreen}
              options={{

                headerTitle: 'Payments',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
     <Stack.Screen
              name="Policies"
              component={UniversityPoliciesScreen}
              options={{

                headerTitle: 'Policies',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
    <Stack.Screen
                   name="PolicyDetails"
                   component={PolicyDetailsScreen}
                   options={{

                     headerTitle: 'Quotations',
                     headerStyle: {
                       backgroundColor: '#d06009', // UZ blue color for the header
                     },
                     headerTintColor: '#FFFFFF', // White color for header text
                   }}
                 />
   <Stack.Screen
                name="Quotes"
                component={QuotationsScreen}
                options={{

                  headerTitle: 'Quotations',
                  headerStyle: {
                    backgroundColor: '#d06009', // UZ blue color for the header
                  },
                  headerTintColor: '#FFFFFF', // White color for header text
                }}
              />
 <Stack.Screen
                name="QuotationsDetails"
                component={QuotationsDetailsScreen}
                options={{

                  headerTitle: 'Quotations',
                  headerStyle: {
                    backgroundColor: '#d06009', // UZ blue color for the header
                  },
                  headerTintColor: '#FFFFFF', // White color for header text
                }}
              />

    </Stack.Navigator>
  );
}
function ExtracurricularStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0033A0', // UZ blue color for the header
        },
        headerTintColor: '#FFFFFF', // White color for header text
      }}
    >
      <Stack.Screen
        name="Extracurricular"
        component={ExtracurricularScreen}
        options={{
          headerShown: false,
          headerTitle: 'Extracurricular',
          headerStyle: {
            backgroundColor: '#d06009', // UZ blue color for the header
          },
          headerTintColor: '#FFFFFF', // White color for header text
        }}
      />
       <Stack.Screen
              name="StudentProfile"
              component={StudentProfileScreen}
              options={{
                headerTitle: 'Student Profile',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
         <Stack.Screen
              name="Clubs"
              component={ClubsAndSocietiesScreen}
              options={{

                headerTitle: 'Clubs And Societies',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
        <Stack.Screen
               name="ClubDetail"
               component={ClubDetailScreen}
               options={{

                 headerTitle: 'Clubs And Societies',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
      <Stack.Screen
               name="Events"
               component={EventsAndWorkshopsScreen}
               options={{

                 headerTitle: 'Events and Workshops',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
      <Stack.Screen
               name="EventDetail"
               component={EventDetailScreen}
               options={{

                 headerTitle: 'Events and Workshops',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
      <Stack.Screen
               name="Sports"
               component={SportsAndRecreationScreen}
               options={{

                 headerTitle: 'Sports and Recreation',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
    <Stack.Screen
               name="SportDetail"
               component={SportDetailScreen}
               options={{

                 headerTitle: 'Sports and Recreation',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
    </Stack.Navigator>
  );
}
function ResourcesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0033A0', // UZ blue color for the header
        },
        headerTintColor: '#FFFFFF', // White color for header text
      }}
    >
      <Stack.Screen
        name="CampusResources"
        component={ResourcesScreen}
        options={{
          headerShown: false,
          headerTitle: 'Campus Resources',
          headerStyle: {
            backgroundColor: '#d06009', // UZ blue color for the header
          },
          headerTintColor: '#FFFFFF', // White color for header text
        }}
      />

         <Stack.Screen
              name="Library"
              component={LibraryServicesScreen}
              options={{

                headerTitle: 'Library Services',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
 <Stack.Screen
                            name="DigitalResources"
                            component={DigitalResourcesScreen}
                            options={{

                              headerTitle: 'Library Services',
                              headerStyle: {
                                backgroundColor: '#d06009', // UZ blue color for the header
                              },
                              headerTintColor: '#FFFFFF', // White color for header text
                            }}
                          />
  <Stack.Screen
              name="Accommodation"
              component={AccommodationScreen}
              options={{

                headerTitle: 'Accommodation',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
  <Stack.Screen
              name="OffCampus"
              component={OffCampusScreen}
              options={{

                headerTitle: 'Off campus Accommodation',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
  <Stack.Screen
              name="OnCampus"
              component={OnCampusScreen}
              options={{

                headerTitle: 'On campus Accommodation',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
<Stack.Screen
              name="HouseDetail"
              component={HouseDetailScreen}
              options={{

                headerTitle: 'Off campus Accommodation',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
<Stack.Screen
              name="Alumni"
              component={AlumniScreen}
              options={{

                headerTitle: 'Alumni',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
 <Stack.Screen
               name="AlumniDirectory"
               component={AlumniDirectoryScreen}
               options={{

                 headerTitle: 'Alumni',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
<Stack.Screen
               name="AlumniProfile"
               component={AlumniProfileScreen}
               options={{

                 headerTitle: 'Alumni',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
<Stack.Screen
              name="Forums"
              component={DiscussionForumsScreen}
              options={{

                headerTitle: 'Forums',
                headerStyle: {
                  backgroundColor: '#d06009', // UZ blue color for the header
                },
                headerTintColor: '#FFFFFF', // White color for header text
              }}
            />
 <Stack.Screen
               name="StudyRoomBooking"
               component={StudyRoomBookingScreen}
               options={{

                 headerTitle: 'Forums',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
 <Stack.Screen
               name="ForumDetails"
               component={ForumDetailsScreen}
               options={{

                 headerTitle: 'Forums',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />
 <Stack.Screen
               name="Maps"
               component={MapScreen}
               options={{
                 headerShown : false,
                 headerTitle: 'Maps',
                 headerStyle: {
                   backgroundColor: '#d06009', // UZ blue color for the header
                 },
                 headerTintColor: '#FFFFFF', // White color for header text
               }}
             />


   </Stack.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0033A0',
        },
        headerTintColor: '#FFFFFF',
      }}
    >


     <Stack.Screen
            name="Frame1"
            component={Frame1}
            options={{
              headerShown: false,
              headerTitle: 'GradUate',
              headerStyle: {
                backgroundColor: '#d06009',
              },
              headerTintColor: '#FFFFFF',
            }}
          />

      <Stack.Screen
        name="StudentProfile"
        component={StudentProfileScreen}
        options={{
          headerTitle: 'Student Profile',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
         <Stack.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{
                headerShown: false,
                headerTitle: 'Calendar',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
 <Stack.Screen
              name="ELearningStack"
              component={ELearningStack}
              options={{
                headerTitle: 'Student Profile',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
      <Stack.Screen
        name="CourseAssessment"
        component={CourseAssessmentScreen}
        options={{
          headerTitle: 'Student Profile',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
          <Stack.Screen
              name="AnnouncementDetail"
              component={AnnDetailScreen}
              options={{
                headerTitle: 'Announcements',
                headerStyle: {
                  backgroundColor: '#d06009',
                },
                headerTintColor: '#FFFFFF',
              }}
            />
      <Stack.Screen
        name="DigitalID"
        component={DigitalIDScreen}
        options={{
          headerTitle: 'Student Profile',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="RegistrationStatus"
        component={RegistrationStatusScreen}
        options={{
          headerTitle: 'Student Profile',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          headerTitle: 'Student Profile',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="StudentSupport"
        component={StudentSupportScreen}
        options={{
          headerTitle: 'Student Support',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          headerTitle: 'Admin',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="Extracurricular"
        component={ExtracurricularScreen}
        options={{
          headerTitle: 'Extracurricular',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
      <Stack.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{
          headerTitle: 'Resources',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}
function LoginStack({ onLogin }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={props => <LoginScreen {...props} onLogin={onLogin} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Start"
        component={Frame1}
        options={{
          headerShown: false,
          headerTitle: 'GradUate',
          headerStyle: {
            backgroundColor: '#d06009',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}
function MainTabNavigator({ setIsLoggedIn }) {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://graduateapp.onrender.com/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsLoggedIn(false); // Set the login state to false, triggering the navigation to the Login screen
      } else {
        Alert.alert('Error', 'Failed to log out. Please try again.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'GradUate') {
                iconName = 'home';
              } else if (route.name === 'Academics') {
                iconName = 'book-open-variant';
              } else if (route.name === 'StudentSupports') {
                iconName = 'account-group-outline';
              } else if (route.name === 'Admins') {
                iconName = 'office-building-outline';
              } else if (route.name === 'Extracurriculars') {
                iconName = 'basketball';
              } else if (route.name === 'Resources') {
                iconName = 'library';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#d06009',
            tabBarInactiveTintColor: '#FFFFFF',
            tabBarStyle: {
              backgroundColor: '#002964',
            },
          })}
        >
          <Tab.Screen
            name="GradUate"
            component={HomeStack}
            options={({ navigation }) => ({
              headerTitle: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ELearningStack')}>
                  <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>
                    GradUate
                  </Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#d06009',
              },
              headerTintColor: '#FFFFFF',
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                  <TouchableOpacity style={{ marginRight: 15 }}>
                    <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Calendar')} // Navigate to CalendarScreen
                    style={{ marginRight: 15 }}
                  >
                    <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('StudentProfile')}
                    onLongPress={() =>
                      Alert.alert(
                        'Log out',
                        'Are you sure you want to log out?',
                        [
                          {
                            text: 'Cancel',
                            style: 'cancel',
                          },
                          {
                            text: 'Log out',
                            onPress: handleLogout,
                          },
                        ],
                        { cancelable: true }
                      )
                    }
                  >
                    <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
       <Tab.Screen
         name="Academics"
         component={AcademicsStack}
         options={{
           headerShown: true,
           headerTitle: 'Academics',
           headerStyle: {
             backgroundColor: '#d06009',
           },
           headerTintColor: '#FFFFFF',
           headerRight: () => (
             <View style={{ flexDirection: 'row', marginRight: 10 }}>
                           <TouchableOpacity style={{ marginRight: 15 }}>
                             <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
                           </TouchableOpacity>
                           <TouchableOpacity style={{ marginRight: 15 }}>
                             <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
                           </TouchableOpacity>
                           <TouchableOpacity
                             onPress={() => navigation.navigate('StudentProfile')}
                             onLongPress={() =>
                               Alert.alert(
                                 'Log out',
                                 'Are you sure you want to log out?',
                                 [
                                   {
                                     text: 'Cancel',
                                     style: 'cancel',
                                   },
                                   {
                                     text: 'Log out',
                                     onPress: handleLogout, // Call the handleLogout function directly
                                   },
                                 ],
                                 { cancelable: true }
                               )
                             }
                           >
                             <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
                           </TouchableOpacity>
                         </View>
                       ),
                     }}
                   />
       <Tab.Screen
         name="StudentSupports"
         component={StudentSupportStack}
         options={{
           headerShown: false,
           headerTitle: 'Student Support',
                headerStyle: {
                       backgroundColor: '#d06009',
                     },
                     headerTintColor: '#FFFFFF',
                     headerRight: () => (
                       <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                     <TouchableOpacity style={{ marginRight: 15 }}>
                                       <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
                                     </TouchableOpacity>
                                     <TouchableOpacity style={{ marginRight: 15 }}>
                                       <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
                                     </TouchableOpacity>
                                     <TouchableOpacity
                                       onPress={() => navigation.navigate('StudentProfile')}
                                       onLongPress={() =>
                                         Alert.alert(
                                           'Log out',
                                           'Are you sure you want to log out?',
                                           [
                                             {
                                               text: 'Cancel',
                                               style: 'cancel',
                                             },
                                             {
                                               text: 'Log out',
                                               onPress: handleLogout, // Call the handleLogout function directly
                                             },
                                           ],
                                           { cancelable: true }
                                         )
                                       }
                                     >
                                       <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
                                     </TouchableOpacity>
                                   </View>
                                 ),
                               }}
                             />
       <Tab.Screen
         name="Admins"
         component={AdminStack}
         options={{
           headerTitle: 'Admin',
                 headerStyle: {
                        backgroundColor: '#d06009',
                      },
                      headerTintColor: '#FFFFFF',
                      headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                      <TouchableOpacity style={{ marginRight: 15 }}>
                                        <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ marginRight: 15 }}>
                                        <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        onPress={() => navigation.navigate('StudentProfile')}
                                        onLongPress={() =>
                                          Alert.alert(
                                            'Log out',
                                            'Are you sure you want to log out?',
                                            [
                                              {
                                                text: 'Cancel',
                                                style: 'cancel',
                                              },
                                              {
                                                text: 'Log out',
                                                onPress: handleLogout, // Call the handleLogout function directly
                                              },
                                            ],
                                            { cancelable: true }
                                          )
                                        }
                                      >
                                        <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                    </View>
                                  ),
                                }}
                              />
       <Tab.Screen
         name="Extracurriculars"
         component={ExtracurricularStack}
         options={{
           headerTitle: 'Extracurricular',
                 headerStyle: {
                        backgroundColor: '#d06009',
                      },
                      headerTintColor: '#FFFFFF',
                      headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                      <TouchableOpacity style={{ marginRight: 15 }}>
                                        <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ marginRight: 15 }}>
                                        <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        onPress={() => navigation.navigate('StudentProfile')}
                                        onLongPress={() =>
                                          Alert.alert(
                                            'Log out',
                                            'Are you sure you want to log out?',
                                            [
                                              {
                                                text: 'Cancel',
                                                style: 'cancel',
                                              },
                                              {
                                                text: 'Log out',
                                                onPress: handleLogout, // Call the handleLogout function directly
                                              },
                                            ],
                                            { cancelable: true }
                                          )
                                        }
                                      >
                                        <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                    </View>
                                  ),
                                }}
                              />
       <Tab.Screen
         name="Resources"
         component={ResourcesStack}
         options={{
           headerTitle: 'Resources',
                 headerStyle: {
                        backgroundColor: '#d06009',
                      },
                      headerTintColor: '#FFFFFF',
                      headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                      <TouchableOpacity style={{ marginRight: 15 }}>
                                        <MaterialCommunityIcons name="magnify" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{ marginRight: 15 }}>
                                        <MaterialCommunityIcons name="calendar" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                      <TouchableOpacity
                                        onPress={() => navigation.navigate('StudentProfile')}
                                        onLongPress={() =>
                                          Alert.alert(
                                            'Log out',
                                            'Are you sure you want to log out?',
                                            [
                                              {
                                                text: 'Cancel',
                                                style: 'cancel',
                                              },
                                              {
                                                text: 'Log out',
                                                onPress: handleLogout, // Call the handleLogout function directly
                                              },
                                            ],
                                            { cancelable: true }
                                          )
                                        }
                                      >
                                        <MaterialCommunityIcons name="account" size={24} color="#FFFFFF" />
                                      </TouchableOpacity>
                                    </View>
                                  ),
                                }}
                              />
     </Tab.Navigator>
   );
 }

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the login state to true
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await getTokenFromStorage();
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Wrapper component to pass handleLogin to LoginScreen
  const LoginScreenWrapper = (props) => <LoginScreen {...props} onLogin={handleLogin} />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Main"
            options={{
              headerShown: false,
            }}
          >
            {() => <MainTabNavigator setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
                  <Stack.Screen
                      name="Login"
                      component={LoginScreenWrapper}
                      options={{ headerShown: false }}
                    />
                  )}
                  <Stack.Screen
                    name="ELearningStack"
                    component={ELearningStack}
                    options={{ headerShown: false }} // Hide the tab navigator when navigating to eLearningStack
                  />
                </Stack.Navigator>
              </NavigationContainer>
            );
          }


// Mock function for getting token from storage
const getTokenFromStorage = async () => {
  // Replace with real token retrieval logic
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000); // Simulate async token retrieval
  });
};

export default AppNavigator;