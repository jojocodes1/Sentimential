import { getAuth  } from "firebase/auth";
import firebaseApp from "../FirbaseConfig/firebase"

const auth = getAuth(firebaseApp);
function EditProfilePage() {

    const userEmail = auth.currentUser.email;
    console.log(auth.currentUser);

  return (
    <div className="App">
        <h1>Hello {userEmail}</h1>
    </div>
  )
}

export default EditProfilePage;