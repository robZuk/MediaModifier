export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "Home",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: "ImageUp",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "PaintBucket",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: "PackageX",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "Blend",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "Palette",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "User",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "Coins",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Basic Package",
    icon: "/assets/icons/free-plan.svg",
    price: 20,
    credits: 40,
    inclusions: [
      // {
      //   label: "40  Credits",
      //   // isIncluded: true,
      // },
      // {
      //   label: "Basic Access to Services",
      //   isIncluded: true,
      // },
      // {
      //   label: "Priority Customer Support",
      //   isIncluded: false,
      // },
      // {
      //   label: "Priority Updates",
      //   isIncluded: false,
      // },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      // {
      //   label: "120 Credits",
      //   // isIncluded: true,
      // },
      // {
      //   label: "Full Access to Services",
      //   isIncluded: true,
      // },
      // {
      //   label: "Priority Customer Support",
      //   isIncluded: true,
      // },
      // {
      //   label: "Priority Updates",
      //   isIncluded: false,
      // },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 60,
    credits: 350,
    inclusions: [
      // {
      //   label: "350 Credits",
      //   // isIncluded: true,
      // },
      // {
      //   label: "Full Access to Services",
      //   isIncluded: true,
      // },
      // {
      //   label: "Priority Customer Support",
      //   isIncluded: true,
      // },
      // {
      //   label: "Priority Updates",
      //   isIncluded: true,
      // },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Image Restore",
    subTitle: "Sharpen blurry photos",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Remove Background ",
    subTitle: "Remove the background of the image",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance scope of your image",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Remove Object",
    subTitle: "Remove the object from from image",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Recolor Object",
    subTitle: "Recolor object from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
