const MainHeading = ({ title, description }) => {
  return (
    <div className='main-heading'>
      <h3 data-i18n='activities'>{title}</h3>
      {description && <p data-i18n='activitiesDesc'>{description}</p>}
    </div>
  );
};

export default MainHeading;
