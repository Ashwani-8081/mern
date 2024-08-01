// import React, { useState } from "react";
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBNavbarBrand,
// } from "mdb-react-ui-kit";
// import { useSelector, useDispatch } from "react-redux";
// import { setLogout } from "../redux/features/authSlice";
// import { searchTours } from "../redux/features/tourSlice";
// import { useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";

// const Header = () => {
//   const [show, setShow] = useState(false);
//   const [search, setSearch] = useState("");
//   const { user } = useSelector((state) => ({ ...state.auth }));
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = user?.token;

//   if (token) {
//     const decodedToken = jwtDecode(token);
//     if (decodedToken.exp * 1000 < new Date().getTime()) {
//       dispatch(setLogout());
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (search) {
//       dispatch(searchTours(search));
//       navigate(`/tours/search?searchQuery=${search}`);
//       setSearch("");
//     } else {
//       navigate("/");
//     }
//   };

//   const handleLogout = () => {
//     dispatch(setLogout());
//   };

//   return (
//     <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
//       <MDBContainer>
//         <MDBNavbarBrand
//           href="/"
//           style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
//         >
//           Touropedia
//         </MDBNavbarBrand>
//         <MDBNavbarToggler
//           type="button"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={() => setShow(!show)}
//           style={{ color: "#606080" }}
//         >
//           <MDBIcon icon="bars" fas />
//         </MDBNavbarToggler>
//         <MDBCollapse show={show} navbar style={{marginLeft: "350px"}}>
//           <MDBNavbarNav
//             right
//             fullWidth={false}
//             className="d-flex align-items-center mb-2 mb-lg-0 ms-auto"
//             style={{ marginRight: "0px" }} // Ensure no margin on the right side
//           >
//             {user?.result?._id && (
//               <h5 className="me-3 mb-0">
//                 Logged in as: {user?.result?.name}
//               </h5>
//             )}
//             <MDBNavbarItem>
//               <MDBNavbarLink href="/" className="me-2">
//                 <p className="header-text">Home</p>
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             {user?.result?._id && (
//               <>
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/addTour" className="me-2">
//                     <p className="header-text">Add Tour</p>
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/dashboard" className="me-2">
//                     <p className="header-text">Dashboard</p>
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               </>
//             )}
//             {user?.result?._id ? (
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/login" className="me-2" onClick={() => handleLogout()}>
//                   <p className="header-text">Logout</p>
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//             ) : (
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/login" className="me-2">
//                   <p className="header-text">Login</p>
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//             )}
//             <form className="d-flex align-items-center ms-3" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 className="form-control me-1"
//                 placeholder="Search Tour"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 style={{ maxWidth: '150px' }} // Adjust width as needed
//               />
//               <button type="submit" className="btn btn-link p-0">
//                 <MDBIcon fas icon="search" />
//               </button>
//             </form>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// };

// export default Header;




// import React, { useState } from "react";
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBNavbarBrand,
// } from "mdb-react-ui-kit";
// import { useSelector, useDispatch } from "react-redux";
// import { setLogout } from "../redux/features/authSlice";
// import { searchTours } from "../redux/features/tourSlice";
// import { useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";

// const Header = () => {
//   const [show, setShow] = useState(false);
//   const [search, setSearch] = useState("");
//   const { user } = useSelector((state) => ({ ...state.auth }));
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = user?.token;

//   if (token) {
//     const decodedToken = jwtDecode(token);
//     if (decodedToken.exp * 1000 < new Date().getTime()) {
//       dispatch(setLogout());
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (search) {
//       dispatch(searchTours(search));
//       navigate(`/tours/search?searchQuery=${search}`);
//       setSearch("");
//     } else {
//       navigate("/");
//     }
//   };

//   const handleLogout = () => {
//     dispatch(setLogout());
//   };

//   return (
//     <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
//       <MDBContainer>
//         <MDBNavbarBrand
//           href="/"
//           style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
//         >
//           Touropedia
//         </MDBNavbarBrand>
//         <MDBNavbarToggler
//           type="button"
//           aria-expanded="false"
//           aria-label="Toogle navigation"
//           onClick={() => setShow(!show)}
//           style={{ color: "#606080" }}
//         >
//           <MDBIcon icon="bars" fas />
//         </MDBNavbarToggler>
//         <MDBCollapse show={show} navbar  style={{marginLeft: "350px"}}>
//           <MDBNavbarNav right fullWidth={false} className="d-fex align-items-center mb-2 mb-lg-0 ms-auto"  style={{marginRight: "0px"}}>
//             {user?.result?._id && (
//               <h5 className="me-3 mb-0">
//                 Logged in as: {user?.result?.name}
//               </h5>
//             )}
//             <MDBNavbarItem>
//               <MDBNavbarLink href="/" className="me-2">
//                 <p className="header-text">Home</p>
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             {user?.result?._id && (
//               <>
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/addTour" className="me-2">
//                     <p className="header-text">Add Tour</p>
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/dashboard" className="me-2">
//                     <p className="header-text">Dashboard</p>
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               </>
//             )}
//             {user?.result?._id ? (
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/login" className="me-2"> 
//                   <p className="header-text" onClick={() => handleLogout()}>
//                     Logout
//                   </p>
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//             ) : (
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/login"  className="me-2">
//                   <p className="header-text">Login</p>
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//             )}
//           </MDBNavbarNav>
//           <form className="d-flex align-items-center ms-3" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               className="form-control me-1"
//               placeholder="Search Tour"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{maxWidth: "150px"}}
//             />
//             <div  className="btn btn-link p-0" >
           
//               <MDBIcon fas icon="search" />
//             </div>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// };

// export default Header;



import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { searchTours } from "../redux/features/tourSlice";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = user?.token;

  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      dispatch(setLogout());
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchTours(search));
      navigate(`/tours/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
        >
          Touropedia
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar  style={{marginLeft: "350px"}}>
          <MDBNavbarNav
            right
            fullWidth={false}
            className="d-flex align-items-center mb-2 mb-lg-0 ms-auto"
          >
            {user?.result?._id && (
              <h5 className="me-3 mb-0">
                Logged in as: {user?.result?.name}
              </h5>
            )}
            <MDBNavbarItem>
              <MDBNavbarLink href="/" className="me-2">
                <p className="header-text">Home</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/addTour" className="me-2">
                    <p className="header-text">Add Tour</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/dashboard" className="me-2">
                    <p className="header-text">Dashboard</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
            {user?.result?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login" className="me-2" onClick={handleLogout}>
                  <p className="header-text">Logout</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login" className="me-2">
                  <p className="header-text">Login</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}
            <form className="d-flex align-items-center ms-3" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control me-1"
                placeholder="Search Tour"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: "150px" }}
              />
              <button type="submit" className="btn btn-link p-0">
                <MDBIcon fas icon="search" />
              </button>
            </form>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;

