async function typeScriptFetch1() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'

  type Profile = {
      title: string
      id: number
  }

  type FetchProfile = () => Promise<Profile | null>
  
  const fetchProfile: FetchProfile = async () => {
      const response = await fetch(url)
          .then((res) => res)
          .catch((error) => {
              console.error(error)
              return null
          })

      if (!response) {
          return null
      }

      const json = await response.json()
          .then((json: Profile) => {
              console.log("async 1: ", json)
              return json
          })
          .catch((error) => {
              console.error(error)
              return null
          })

      if (!json) {
          return null
      }

      return json
  }

  const profile = await fetchProfile()
  if(profile) {
      console.log("async 2: ", profile)
  }
}

typeScriptFetch1()