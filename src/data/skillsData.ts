import { SkillNode, SkillEdge } from '../types';
import { Position } from 'reactflow';

export const initialNodes: SkillNode[] = [
  {
    id: '1',
    type: 'skillNode',
    position: { x: 400, y: 40 },
    targetPosition: Position.Bottom,
    sourcePosition: Position.Bottom,
    data: {
      label: 'Python',
      category: 'Programming',
      description: 'Proficient in Python for data analysis and machine learning applications. Experienced with pandas for data manipulation, scikit-learn for machine learning models, and matplotlib/seaborn for visualization. Strong background in developing predictive models and data pipelines for business analytics solutions.',
      proficiencyLevel: 4,
      yearsExperience: 5,
      projects: [
        {
          title: 'Breast Cancer Classification',
          description: 'Developed a comprehensive machine learning pipeline for breast cancer classification using various algorithms including SVM, Random Forest, and Logistic Regression. Implemented feature selection techniques and cross-validation to achieve optimal model performance for medical diagnosis support.',
          githubLink: 'https://github.com/Maryem11/Breast_Cancer_Classification'
        },
        {
          title: 'Tree Classifier for Optimal Crop Planting',
          description: 'Created a decision tree classifier to determine ideal locations for crop planting based on environmental factors. The model analyzes soil conditions, climate data, and geographic features to provide data-driven recommendations for agricultural planning and optimization.',
          githubLink: 'https://github.com/Maryem11/Tree_Classifier'
        }
      ]
    }
  },
  {
    id: '2',
    type: 'skillNode',
    position: { x: 170, y: 140 },
    targetPosition: Position.Bottom,
    data: {
      label: 'SQL',
      category: 'Database',
      description: 'Strong SQL skills for data extraction, transformation, and analysis. Experienced in writing complex queries for business intelligence, data cleaning, and reporting. Proficient in joins, subqueries, window functions, and stored procedures across various database systems for data analytics projects.',
      proficiencyLevel: 4,
      yearsExperience: 8,
      projects: [
        {
          title: 'E-commerce Data Analysis',
          description: 'Performed comprehensive data analysis on e-commerce transactions using SQL to extract insights on customer behavior, sales trends, and product performance. Created complex queries to support the development of interactive dashboards and business intelligence reports.',
          githubLink: 'https://github.com/Maryem11/Ecommerce-Orders-Dashboard'
        },
        {
          title: 'Business Analytics Database Queries',
          description: 'Developed SQL scripts for data extraction and transformation as part of business analytics coursework. Created optimized queries for large datasets, implemented data quality checks, and designed reporting queries to support data-driven decision making.',
          githubLink: 'https://github.com/Maryem11/Lina_Perez_Portfolio'
        }
      ]
    }
  },
  {
    id: '3',
    type: 'skillNode',
    position: { x: 100, y: 400 },
    targetPosition: Position.Right,
    data: {
      label: 'Power BI',
      category: 'Visualization',
      description: 'Skilled in creating interactive dashboards and reports using Power BI for business intelligence and data visualization. Experienced in data modeling, DAX calculations, and designing user-friendly interfaces that translate complex data into actionable insights for stakeholders and decision-makers.',
      proficiencyLevel: 4,
      yearsExperience: 7,
      projects: [
        {
          title: 'E-commerce Orders Dashboard',
          description: 'Developed a comprehensive Power BI dashboard analyzing e-commerce orders data, featuring interactive visualizations of sales performance, customer segments, product trends, and regional analysis. The dashboard provides real-time insights into business KPIs and supports data-driven decision making.',
          githubLink: 'https://github.com/Maryem11/Ecommerce-Orders-Dashboard'
        },
        {
          title: 'Business Analytics Reporting Suite',
          description: 'Created multiple Power BI reports and dashboards as part of business analytics projects, focusing on descriptive and predictive analytics. Implemented dynamic filtering, drill-down capabilities, and custom visualizations to enhance user experience and data exploration.',
          githubLink: 'https://github.com/Maryem11/Lina_Perez_Portfolio'
        }
      ]
    }
  },
  {
    id: '4',
    type: 'skillNode',
    position: { x: 400, y: 520 },
    targetPosition: Position.Top,
    data: {
      label: 'Machine Learning',
      category: 'AI/ML',
      description: 'Experienced in supervised learning algorithms for classification and regression problems. Proficient in model development, feature engineering, and evaluation using scikit-learn. Familiar with decision trees, SVM, logistic regression, and ensemble methods for predictive analytics in healthcare and agriculture domains.',
      proficiencyLevel: 4,
      yearsExperience: 3,
      projects: [
        {
          title: 'Breast Cancer Classification Pipeline',
          description: 'Built a comprehensive machine learning pipeline for breast cancer diagnosis using multiple algorithms including SVM, Random Forest, and Logistic Regression. Implemented feature selection, cross-validation, and model comparison to achieve optimal classification performance for medical applications.',
          githubLink: 'https://github.com/Maryem11/Breast_Cancer_Classification'
        },
        {
          title: 'Agricultural Decision Tree Classifier',
          description: 'Developed a decision tree classifier to determine optimal crop planting locations using environmental and geographic features. Applied data preprocessing, feature engineering, and model validation techniques to provide actionable insights for agricultural planning and resource optimization.',
          githubLink: 'https://github.com/Maryem11/Tree_Classifier'
        }
      ]
    }
  },
  {
    id: '5',
    type: 'skillNode',
    position: { x: 700, y: 400 },
    targetPosition: Position.Left,
    data: {
      label: 'Statistical Analysis',
      category: 'Statistics',
      description: 'Strong foundation in statistical methods including descriptive statistics, hypothesis testing, regression analysis, and correlation analysis. Experienced in applying statistical techniques to derive insights from business data and support evidence-based decision making through both Python and R.',
      proficiencyLevel: 4,
      yearsExperience: 5,
      projects: [
        {
          title: 'E-commerce Statistical Analysis',
          description: 'Conducted comprehensive statistical analysis of e-commerce data including sales trends, customer behavior patterns, and seasonal variations. Applied descriptive statistics, correlation analysis, and hypothesis testing to identify key business insights and support strategic recommendations.',
          githubLink: 'https://github.com/Maryem11/Ecommerce-Orders-Dashboard'
        },
        {
          title: 'Predictive Model Validation',
          description: 'Performed statistical validation of machine learning models including significance testing, confidence intervals, and performance metrics analysis. Applied statistical techniques to assess model reliability and interpret results for both breast cancer classification and crop prediction projects.',
          githubLink: 'https://github.com/Maryem11/Breast_Cancer_Classification'
        }
      ]
    }
  },
  {
    id: '6',
    type: 'skillNode',
    position: { x: 630, y: 140 },
    targetPosition: Position.Bottom,
    data: {
      label: 'Tableau',
      category: 'Visualization',
      description: 'Proficient in Tableau for creating interactive dashboards and data visualizations. Experienced in connecting multiple data sources, designing user-friendly interfaces, and developing compelling visual narratives that communicate complex analytical findings to diverse stakeholders.',
      proficiencyLevel: 3,
      yearsExperience: 3,
      projects: [
        {
          title: 'Business Analytics Dashboards',
          description: 'Created multiple Tableau dashboards as part of business analytics coursework and professional projects. Developed interactive visualizations for sales analysis, customer segmentation, and performance metrics with advanced filtering and drill-down capabilities.',
          githubLink: 'https://github.com/Maryem11/Lina_Perez_Portfolio'
        },
        {
          title: 'Data Storytelling with Tableau',
          description: 'Designed compelling data stories using Tableau to present analytical findings to business stakeholders. Combined multiple visualization types, implemented dynamic parameters, and created narrative flows that effectively communicate insights and recommendations.',
          githubLink: 'https://github.com/Maryem11/Lina_Perez_Portfolio'
        }
      ]
    }
  },
  {
    id: '7',
    type: 'skillNode',
    position: { x: 400, y: 280 },
    sourcePosition: Position.Bottom,
    data: {
      label: 'Excel',
      category: 'Data Engineering',
      description: 'Advanced Excel skills for data analysis, financial modeling, and business reporting. Proficient in pivot tables, VLOOKUP/XLOOKUP, advanced formulas, data visualization, and automation with macros. Experienced in creating dynamic dashboards and performing complex data analysis for business intelligence.',
      proficiencyLevel: 4,
      yearsExperience: 11,
      projects: [
        {
          title: 'Financial Analysis Dashboard',
          description: 'Created comprehensive Excel dashboards for financial analysis and budget tracking. Implemented advanced formulas, conditional formatting, and interactive charts to provide real-time insights into financial performance and support executive decision-making processes.',
          githubLink: 'https://github.com/Maryem11/Lina_Perez_Portfolio'
        },
        {
          title: 'Data Analysis Workbooks',
          description: 'Developed multiple Excel workbooks for data cleaning, analysis, and reporting as part of business analytics projects. Utilized advanced Excel functions, pivot tables, and data validation to process large datasets and create professional reports for stakeholders.',
          githubLink: 'https://github.com/Maryem11/Lina_Perez_Portfolio'
        }
      ]
    }
  }
];

export const initialEdges: SkillEdge[] = [
  // Excel as central hub with connections to all skills
  { id: 'e1-7', source: '1', target: '7', sourcePosition: Position.Bottom, targetPosition: Position.Top },
  { id: 'e2-7', source: '2', target: '7', sourcePosition: Position.Bottom, targetPosition: Position.Right },
  { id: 'e7-3', source: '7', target: '3', sourcePosition: Position.Left, targetPosition: Position.Right },
  { id: 'e7-4', source: '7', target: '4', sourcePosition: Position.Top, targetPosition: Position.Bottom },
  { id: 'e7-5', source: '7', target: '5', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'e6-7', source: '6', target: '7', sourcePosition: Position.Bottom, targetPosition: Position.Right },
]; 