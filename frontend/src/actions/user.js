import axios from "axios";

export const getUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST"
        });

        const { data } = await axios.get("/api/v1/admin/users");

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.users

        });
    } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message

        });
    }
}

//LOGIN
export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST"

        });


        const { data } = await axios.get("/api/v1/logout");

        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message

        });
    } catch (error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message

        });
    }
};

//LOGIN
export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST"

        });

        //sending email and password as login route accepts email and pswd as parameter
        const { data } = await axios.post("/api/v1/login", {
            email,
            password,
        },
            {
                headers: {
                    "content-type": "application/json"
                }
            }
        );

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message

        });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response.data.message

        });
    }
};

//LOAD USER ..STORE TOKEN ONLY IF USER IS LOGGED IN 
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LOAD_USER_REQUEST"
        });


        const { data } = await axios.get("/api/v1/me");

        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.user

        });
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response.data.message

        });
    }
}

//UPDATE USER
export const updateUser = (name, email, password, about, skills) => async (dispatch) => {
    try {
        dispatch({
            type: "UPDATE_USER_REQUEST"

        });

        //sending email and password as login route accepts email and pswd as parameter
        const { data } = await axios.put("/api/v1/admin/updateUser", {
            name,
            email,
            password,
            about,
            skills
        },
            {
                headers: {
                    "content-type": "application/json"
                },
            }
        );

        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload: data.message

        });
    } catch (error) {
        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload: error.response.data.message

        });
    }
};


export const addTimeline = (title, description, date) => async (dispatch) => {
    try {
        dispatch({
            type: "ADD_TIMELINE_REQUEST"
        });

        const { data } = await axios.post("/api/v1/admin/timeline/add", {
            title, description, date
        },
            {
                headers: {
                    "content-type": "application/json"
                },
            }
        );

        dispatch({
            type: "ADD_TIMELINE_SUCCESS",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "ADD_TIMELINE_FAILURE",
            payload: error.response.data.message
        })
    }
}


export const deleteTimeline = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_TIMELINE_REQUEST"
        });

        const { data } = await axios.delete("/api/v1/admin/timeline/" + id);

        dispatch({
            type: "DELETE_TIMELINE_SUCCESS",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "DELETE_TIMELINE_FAILURE",
            payload: error.response.data.message
        })
    }
}


export const addProject =
    (url, title, image, description, techStack) => async (dispatch) => {
        try {
            dispatch({
                type: "ADD_PROJECT_REQUEST"
            });

            const { data } = await axios.post("/api/v1/admin/project/add", {
                url, title, image, description, techStack
            },
                {
                    headers: {
                        "content-type": "application/json"
                    },
                }
            );

            dispatch({
                type: "ADD_PROJECT_SUCCESS",
                payload: data.message
            })
        } catch (error) {
            dispatch({
                type: "ADD_PROJECT_FAILURE",
                payload: error.response.data.message
            })
        }
    }

export const deleteProject = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "DELETE_PROJECT_REQUEST"
        });

        const { data } = await axios.delete(`/api/v1/admin/project/${id}`);
      
        dispatch({
            type: "DELETE_PROJECT_SUCCESS",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "DELETE_PROJECT_FAILURE",
            payload: error.response.data.message
        })
    }
}

export const contactUser =(name, email,message)=> async (dispatch) =>{
    try {
        dispatch({
            type:"CONTACT_USER_REQUEST"
        });

        const {data} = await axios.post("/api/v1/contact",{
            name, email,message
        },
        {
            headers: {
                "content-type": "application/json"
            },
        });

        dispatch({
            type:"CONTACT_USER_SUCCESS",
            payload:data.message
        })

        
    } catch (error) {
        dispatch({
            type:"CONTACT_USER_FAILURE",
            payload: error.response.data.message
        })
    }
}