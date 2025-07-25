import { type ApiFile, getApiData } from "./api";

export type HomePageData = {
  id: number;
  documentId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  title: string | null;
  description: string | null;
  banner: {
    id: number;
    title: string;
    description: string;
    backgroundimage: ApiFile | null;
  };
  solutionInfos: {
    id: number;
    title: string;
    description: string;
    connect: {
      id: number;
      title: string;
      description: string;
    }[];
    explore: {
      id: number;
      title: string;
      description: string;
    }[];
    deploy: {
      id: number;
      title: string;
      description: string;
    }[];
  },
  video: {
    id: number;
    title: string;
    description: string;
    imageVideo: ApiFile | null;
    video: ApiFile | null;
  };
  informationCXQuali: {
    id: number;
    description: string;
    qualimetrie: string;
    cxfirst: string;
    imageQualimetrie: ApiFile | null;
    imageCxfirst: ApiFile | null;
  };
  lastArticle: {
    id: number;
    title: string;
  }[];
  cxKpi: {
    id: number;
    title: string;
    description: string;
    dataSite: {
      id: number;
      title: string;
      description: string;
    }[];
    dataUser: {
      id: number;
      title: string;
      description: string;
    }[];
    dataClient: {
      id: number;
      title: string;
      description: string;
    }[];
  }[];
  infosTestimony: {
    id: number;
    title: string;
    description: string;
    leftFeedback: {
      id: number;
      feedback: string;
      name: string;
      post: string;
      image: ApiFile | null;
    }[];
    centerFeedback: {
      id: number;
      feedback: string;
      name: string;
      post: string;
      image: ApiFile | null;
    };
    rightFeedback: {
      id: number;
      feedback: string;
      name: string;
      post: string;
      image: ApiFile | null;
    };
  }[];
}

export const getHomePageData = async (lang: string) => {
  return await getApiData<HomePageData>('home-page', lang, [
    'banner',
    'banner.backgroundimage',
    'solutionInfos',
    'solutionInfos.connect',
    'solutionInfos.explore',
    'solutionInfos.deploy',
    'video',
    'video.imageVideo',
    'video.video',
    'informationCXQuali',
    'informationCXQuali.imageQualimetrie',
    'informationCXQuali.imageCxfirst',
    'lastArticle',
    'cxKpi',
    'cxKpi.dataSite',
    'cxKpi.dataUser',
    'cxKpi.dataClient',
    'infosTestimony',
    'infosTestimony.leftFeedback',
    'infosTestimony.centerFeedback',
    'infosTestimony.rightFeedback',
    'infosTestimony.leftFeedback.image',
    'infosTestimony.centerFeedback.image',
    'infosTestimony.rightFeedback.image',
  ]);
}

export type EchangeExpert = {
  title?: string;
  description?: string;
  hero_title?: string;
  hero_subtitle?: string;
}

export const getEchangeExpertData = async (lang: string) => {
  return await getApiData<EchangeExpert>('echange-expert', lang);
}