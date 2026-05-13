import { useNavigate } from "react-router-dom";

export function useSiteNavigate() {
  const navigate = useNavigate();
  return (to, options = {}) => {
    const { scrollToTop = true, ...navigateOptions } = options;
    navigate(to, navigateOptions);
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  };
}
