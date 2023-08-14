import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter" style={{backgroundColor:"gray",height:"85px",borderTopLeftRadius:"50px",borderTopRightRadius:"50px"}}>
      <Typography.Link style={{color:"white",fontSize:"20px"}} href="tel:+123456789">+123456789</Typography.Link>
      <Typography.Link style={{color:"white",fontSize:"20px"}} href="https://www.google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link style={{color:"white",fontSize:"20px"}} href="https://www.google.com" target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
