import { Project, SkillData } from "../types";

const classification: Project = {
  title: "Breast Cancer Classification",
  link: "https://github.com/Maryem11/Breast_Cancer_Classification",
  tag: "Machine learning / Healthcare",
  summary:
    "A classification pipeline exploring SVM, Random Forest, and Logistic Regression, with feature selection and cross-validation.",
};

const cropPlanting: Project = {
  title: "Tree Classifier for Optimal Crop Planting",
  link: "https://github.com/Maryem11/Tree_Classifier",
  tag: "Decision trees / Agriculture",
  summary:
    "A decision tree classifier exploring crop planting locations through soil, climate, and geographic features.",
};

const ecommerce: Project = {
  title: "E-commerce Orders Dashboard",
  link: "https://github.com/Maryem11/Ecommerce-Orders-Dashboard",
  tag: "Power BI / E-commerce",
  summary:
    "An interactive dashboard exploring sales performance, customer segments, product trends, and regional patterns.",
};

export const selectedProjects: Project[] = [
  classification,
  cropPlanting,
  ecommerce,
];

export const skills: SkillData[] = [
  {
    id: "1",
    label: "Python",
    category: "Programming",
    description:
      "Proficient in Python for data analysis and machine learning applications. Experienced with pandas for data manipulation, scikit-learn for machine learning models, and matplotlib/seaborn for visualization. Strong background in developing predictive models and data pipelines for business analytics solutions.",
    projects: [classification, cropPlanting],
  },
  {
    id: "2",
    label: "SQL",
    category: "Database",
    description:
      "Strong SQL skills for data extraction, transformation, and analysis. Experienced in writing complex queries for business intelligence, data cleaning, and reporting. Proficient in joins, subqueries, window functions, and stored procedures across various database systems for data analytics projects.",
    projects: [],
  },
  {
    id: "3",
    label: "Power BI",
    category: "Visualization",
    description:
      "Skilled in creating interactive dashboards and reports using Power BI for business intelligence and data visualization. Experienced in data modeling, DAX calculations, and designing user-friendly interfaces that translate complex data into actionable insights for stakeholders and decision-makers.",
    projects: [ecommerce],
  },
  {
    id: "4",
    label: "Machine Learning",
    category: "AI/ML",
    description:
      "Experienced in supervised learning algorithms for classification and regression problems. Proficient in model development, feature engineering, and evaluation using scikit-learn. Familiar with decision trees, SVM, logistic regression, and ensemble methods for predictive analytics in healthcare and agriculture domains.",
    projects: [classification, cropPlanting],
  },
  {
    id: "5",
    label: "Statistical Analysis",
    category: "Statistics",
    description:
      "Strong foundation in statistical methods including descriptive statistics, hypothesis testing, regression analysis, and correlation analysis. Experienced in applying statistical techniques to derive insights from business data and support evidence-based decision making through both Python and R.",
    projects: [ecommerce, classification],
  },
  {
    id: "6",
    label: "Tableau",
    category: "Visualization",
    description:
      "Proficient in Tableau for creating interactive dashboards and data visualizations. Experienced in connecting multiple data sources, designing user-friendly interfaces, and developing compelling visual narratives that communicate complex analytical findings to diverse stakeholders.",
    projects: [],
  },
  {
    id: "7",
    label: "Excel",
    category: "Data Engineering",
    description:
      "Advanced Excel skills for data analysis, financial modeling, and business reporting. Proficient in pivot tables, VLOOKUP/XLOOKUP, advanced formulas, data visualization, and automation with macros. Experienced in creating dynamic dashboards and performing complex data analysis for business intelligence.",
    projects: [],
  },
];
