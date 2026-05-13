import { useNavigate } from "react-router-dom";

export function useSiteNavigate() {
  const navigate = useNavigate();
  return (to, options = {}) => {
    navigate(to, options);
    window.scrollTo(0, 0);
  };
}
