interface PageNotFoundProps {}

const PageNotFound: React.FunctionComponent<PageNotFoundProps> = () => {
  return (
    <div>
      <h1>Page Not Found (404)</h1>
      <p>Oops! The page you requested is not found. Please fix your Url...</p>
    </div>
  );
};

export default PageNotFound;
