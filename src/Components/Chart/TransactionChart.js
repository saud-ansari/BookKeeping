import React, { useState, useEffect } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";
import transactions from "../Data/Transaction"; // Adjust the path based on your folder structure
import { Card, CardBody, CardHeader } from "react-bootstrap";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA00AA"];

const DonutChartWithLegends = () => {
    const [expenseData, setExpenseData] = useState([]);
    useEffect(() => {
        // Process transactions for expense and income
        const expenseData = transactions
            .filter((txn) => txn.transactionType === "Expense")
            .reduce((acc, txn) => {
                const category = txn.category;
                const amount = parseFloat(txn.amount.replace(/[₹,]/g, "")); // Convert "₹150.25" to 150.25
                acc[category] = (acc[category] || 0) + amount;
                return acc;
            }, {});

        const formattedExpenseData = Object.keys(expenseData).map((key) => ({
            name: key,
            value: expenseData[key],
        }));     

        setExpenseData(formattedExpenseData);
        
    }, []);

    return (
        <Card className="bg-light mt-2 pb-0" >
            <CardBody>
                <CardHeader className="text-center">
                    <h5>This Month Transaction Chart</h5>
                </CardHeader>
                
                <PieChart width={400} height={150} >
                    <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={25} // Makes it a donut chart
                        outerRadius={45}
                        fill="#8884d8"
                        paddingAngle={3}
                        dataKey="value"
                        label
                    >
                        {expenseData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="center"
                        wrapperStyle={
                            {
                                top: 25,

                            }
                        }
                    />
                </PieChart>
            </CardBody>
        </Card>
    );
};

export default DonutChartWithLegends;
