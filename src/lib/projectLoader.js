export const getProjectStatus = (salesStartsIn, salesEndsIn) => {
  const currentTimeStamp = Date.now() / 1000;

  if (currentTimeStamp <= salesStartsIn) {
    return {
      status: "starting",
      count: salesStartsIn - currentTimeStamp,
    };
  }
  if (currentTimeStamp >= salesStartsIn && currentTimeStamp <= salesEndsIn) {
    return {
      status: "ongoing",
      count: salesEndsIn - currentTimeStamp,
    };
  }
  if (currentTimeStamp >= salesEndsIn) {
    return { status: "ended", count: 0 };
  }
};

export const getProjectPaths = (projectsData) => {
  const ids = projectsData.map((project) => project.id);
  const paths = ids.map((id) => {
    let pathsObject = { params: { id: id } };

    return pathsObject;
  });

  return paths;
};

const getTokenPrice = (amountToBeRaised, amountToBeSold) => {
  return amountToBeRaised / amountToBeSold;
};

export const getUtcDate = (timestamp) => {
  const timestampInInt = +timestamp;
  const timestampInMs = timestampInInt * 1000;
  const date = new Date(timestampInMs);
  const utcDateString = date.toUTCString();

  return utcDateString;
};

const getProjectType = (isWhitelisted) => {
  if (isWhitelisted === true) {
    return "Private";
  }
  return "Public";
};

export const getProjectDetails = (mergedProjectData) => {
  const tokenPrice = getTokenPrice(
    mergedProjectData.amount_to_be_raised,
    mergedProjectData.token_to_be_sold
  );
  const projectStatus = getProjectStatus(
    mergedProjectData.sale_start_ts,
    mergedProjectData.sale_end_ts
  );
  const tokenDistributionDate = getUtcDate(
    mergedProjectData.token_distribution_ts
  );
  const projectType = getProjectType(mergedProjectData.is_whitelist);

  return {
    tokenPrice: tokenPrice,
    projectStatus: projectStatus,
    tokenDisributionDate: tokenDistributionDate,
    access: projectType,
  };
};
