import React from 'react';
import {Todo} from './Todo';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Todo.css';


export class TodoList extends React.Component {
	
	render() {
		const todoList = this.props.todoList.map((todo, i) => {
			return (
					<Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
			);
		});

		return (
			<Paper className="root">
					<Table className="table">
							<TableHead>
								<TableRow>
										<TableCell>Task</TableCell>
										<TableCell align="center">Priority</TableCell>
										<TableCell align="center">Due Date</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{todoList}
							</TableBody>
					</Table>
			</Paper>
		);
	}
}