import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiMongoose,
} from "react-icons/si";

const createIcon = (Icon, defaultClass) =>
  ({ className = "", ...props }) =>
    <Icon className={`${defaultClass} ${className}`.trim()} {...props} />;

// Icons (default styles preserved)
export const JsIcon = createIcon(SiJavascript, "text-yellow-400 bg-black");
export const ReactIcon = createIcon(SiReact, "text-sky-400");
export const NodeIcon = createIcon(SiNodedotjs, "text-green-500");
export const ExpressIcon = createIcon(
  SiExpress,
  "text-gray-600 dark:text-gray-300"
);
export const MongoIcon = createIcon(SiMongodb, "text-green-600");
export const PgIcon = createIcon(SiPostgresql, "text-blue-500");
export const MySqlIcon = createIcon(SiMysql, "text-blue-600");
export const HtmlIcon = createIcon(SiHtml5, "text-orange-500");
export const CssIcon = createIcon(SiCss3, "text-blue-500");
export const CIcon = createIcon(SiC, "text-blue-700");
export const CppIcon = createIcon(SiCplusplus, "text-blue-600 ");
export const MongooseIcon = createIcon(SiMongoose, "text-red-500");
