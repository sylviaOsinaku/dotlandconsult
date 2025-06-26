import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Award, Download, CheckCircle, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export default function DataAnalysisCoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Professional Training</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Analysis Training</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Unlock insights and transform data into actionable intelligence. Master Excel, Python, SQL, and Power BI
                to become a data-driven professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/training-schedule">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right Images */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Data visualization"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Data analysis dashboard"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Statistical analysis"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Training session"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Description</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    The Data Analysis Training course equips participants with the essential skills and methodologies to
                    turn raw data into meaningful insights. Through a blend of theory, hands-on exercises, and
                    real-world case studies, learners will master the full analytics lifecycle—from formulating
                    questions and gathering data to cleaning, analyzing, visualizing, and interpreting results.
                  </p>
                </div>
              </div>

              {/* What You Will Learn */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Will Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Data Analysis Process: End-to-end workflow from question definition to insight delivery",
                    "Tools & Techniques: Popular software (Excel, Python/pandas, SQL, Tableau/Power BI)",
                    "Statistical Methods: Descriptive statistics, hypothesis testing, and correlation",
                    "Exploratory Data Analysis (EDA): Identifying trends, outliers, and patterns",
                    "Data Visualization: Designing clear charts, dashboards, and reports",
                    "Storytelling with Data: Communicating findings effectively to stakeholders",
                    "Machine Learning Basics: Introduction to predictive analytics",
                    "Business Intelligence: Creating actionable insights for decision-making",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Modules */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 1: Introduction to Data Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• What is Data Analysis?</li>
                        <li>• Types of Data (Structured vs. Unstructured)</li>
                        <li>
                          • Data Analysis Process (Collection → Cleaning → Exploration → Modeling → Interpretation)
                        </li>
                        <li>• Key Roles: Data Analyst vs. Data Scientist vs. Business Analyst</li>
                        <li>• Real-world Applications of Data Analysis</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 2: Data Collection and Data Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Primary vs. Secondary Data Sources</li>
                        <li>• Data Collection Tools and Techniques</li>
                        <li>• Data Formats: CSV, Excel, JSON, SQL Databases, APIs</li>
                        <li>• Introduction to Web Scraping and APIs</li>
                        <li>• Hands-on Activity: Importing data from different sources</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 3: Data Cleaning and Preparation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Understanding Data Quality</li>
                        <li>• Handling Missing Data</li>
                        <li>• Dealing with Outliers and Duplicates</li>
                        <li>• Data Type Conversion</li>
                        <li>• Normalization and Standardization</li>
                        <li>• Data Transformation Techniques</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 4: Exploratory Data Analysis (EDA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Descriptive Statistics: Mean, Median, Mode, Variance, Standard Deviation</li>
                        <li>• Data Visualization for EDA</li>
                        <li>• Detecting Patterns, Trends, and Relationships</li>
                        <li>• Correlation and Covariance</li>
                        <li>• Tools: Excel, Python (pandas, matplotlib, seaborn)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 5: Data Visualization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Principles of Effective Data Visualization</li>
                        <li>• Charts: Bar, Line, Pie, Scatter, Histogram, Boxplot, Heatmaps</li>
                        <li>• Interactive Dashboards (Power BI/Tableau)</li>
                        <li>• Choosing the Right Chart Type</li>
                        <li>• Storytelling with Data</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 6: Statistical Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Probability Basics</li>
                        <li>• Hypothesis Testing (t-test, chi-square, ANOVA)</li>
                        <li>• Confidence Intervals</li>
                        <li>• Regression Analysis (Linear, Logistic)</li>
                        <li>• Statistical Significance</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 7: Data Analysis with Excel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Excel Functions: VLOOKUP, INDEX-MATCH, IF, COUNTIF, etc.</li>
                        <li>• Pivot Tables and Pivot Charts</li>
                        <li>• Excel for Statistical Analysis</li>
                        <li>• Data Models and Power Query</li>
                        <li>• Case Study: Sales Forecasting using Excel</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 8: Data Analysis with Python</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Python for Data Analysis</li>
                        <li>• Working with pandas, numpy, matplotlib, seaborn</li>
                        <li>• DataFrames and Series</li>
                        <li>• Writing Custom Functions</li>
                        <li>• Data Cleaning with Python</li>
                        <li>• EDA with Python Libraries</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 9: Data Analysis with SQL</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Relational Databases</li>
                        <li>• Basic SQL Queries (SELECT, WHERE, JOIN, GROUP BY)</li>
                        <li>• Aggregation and Filtering</li>
                        <li>• Nested Queries and Subqueries</li>
                        <li>• Case Study: Analyzing HR or Sales Data using SQL</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 10: Business Intelligence with Power BI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Power BI Interface</li>
                        <li>• Importing and Cleaning Data</li>
                        <li>• Creating Data Models and Relationships</li>
                        <li>• DAX Basics</li>
                        <li>• Interactive Visuals and Dashboards</li>
                        <li>• Publishing Reports and Sharing Insights</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">
                        Module 11: Machine Learning for Data Analysts (Optional)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Machine Learning Concepts</li>
                        <li>• Supervised vs. Unsupervised Learning</li>
                        <li>• Common Algorithms: Linear Regression, KNN, Decision Trees</li>
                        <li>• Model Evaluation Metrics</li>
                        <li>• Use of Scikit-learn</li>
                        <li>• Hands-on Project: Predicting Customer Churn</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Module 12: Capstone Project and Presentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Real-World Dataset</li>
                        <li>• End-to-End Project: Clean, Analyze, Visualize, and Present</li>
                        <li>• Tools: SQL + Python + Power BI</li>
                        <li>• Final Presentation to Instructors/Peers</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Who Should Attend */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Should Attend</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Aspiring & Experienced Data Analysts",
                        "Business Analysts & Project Managers",
                        "Marketing, Finance & Operations Professionals",
                        "Researchers & Statisticians",
                        "Anyone interested in data-driven decision-making",
                        "Students and Recent Graduates",
                        "Professionals seeking career transition",
                        "Business Intelligence Professionals",
                      ].map((role, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Details Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-2xl font-bold text-red-600">₦180,000</span>
                  </div>
                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="text-sm text-gray-600">3-4 Days (Customizable)</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Class Size</div>
                        <div className="text-sm text-gray-600">Maximum 20 participants</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Certification</div>
                        <div className="text-sm text-gray-600">Certificate of Completion</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Materials</div>
                        <div className="text-sm text-gray-600">Digital & Physical</div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/training-schedule">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Training
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Training Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Training Features & Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Hands-On Labs: Guided exercises in Excel, Python, SQL, and Power BI",
                      "Templates & Cheat-Sheets: Reusable code snippets and design guidelines",
                      "Capstone Project: Apply all learned skills on real-world dataset",
                      "Multiple Delivery Modes: Classroom, Virtual Live, or Hybrid",
                      "Practice Datasets included",
                      "Interview Questions for Data Analyst Roles",
                      "Resume and Portfolio Tips",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tools Covered */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Microsoft Excel",
                      "Python (pandas, numpy)",
                      "SQL Databases",
                      "Power BI",
                      "Tableau",
                      "Jupyter Notebook",
                      "Google Colab",
                      "Matplotlib/Seaborn",
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Your Team to Make Data-Driven Decisions!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform raw data into actionable insights and advance your career in the data-driven economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/training-schedule">Schedule Training</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
