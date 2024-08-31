const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: [],
		},
		actions: {

			login: () => async (email, password) => {
				const resp = await fetch(
				  `https://literate-space-cod-v6wj5vxq4q5hx659-3001.app.github.dev/api/token`,
				  {
					mode: 'no-cors',
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				  }
				);
		
				if (!resp.ok) throw Error("There was a problem in the login request");
		
				if (resp.status === 401) {
				  throw "Invalid credentials";
				} else if (resp.status === 400) {
				  throw "Invalid email or password format";
				}
				const data = await resp.json();
		
				localStorage.setItem("jwt-token", data.token);
		
				return data;
			},

			signup: (email, password) => {
				fetch(
				  `https://literate-space-cod-v6wj5vxq4q5hx659-3001.app.github.dev/api/signup`,
				  {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				  }
				)
				  .then((response) => {
					if (!response.ok) {
					  throw Error(response.status);
					}
					return response.json();
				  })
				  .then((data) => {
					setStore({ user: data });
				  })
				  .catch((error) => {
					console.log(error);
				  });
		
				alert("User created successfully")
			},
		},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};


export default getState;
