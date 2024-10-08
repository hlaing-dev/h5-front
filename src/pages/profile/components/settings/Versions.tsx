const Versions = () => {
  return (
    <div className="profile-div">
      <div className="profile-div-main w-full">
        <div className="p-first">
          <div className="flex gap-1 max-w-[230px] flex-col ">
            <h1 className="versions-title">Current Verison</h1>
          </div>
          <div>
            <h1 className="versions-text">V 3.0.1.6</h1>
          </div>
        </div>
        <div className="p-first">
          <div className="flex gap-1 max-w-[230px] flex-col ">
            <h1 className="versions-title">Clear Cache</h1>
          </div>
          <div>
            <h1 className="versions-text">35.8 Mb</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versions;
