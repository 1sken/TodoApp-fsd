function TaskItem() {
	return (
		<section className="w-full flex items-center p-3 bg-white">
			<div className="flex items-center gap-2">
				<input type="checkbox"/>
				<div className="flex flex-col gap-1">
					<p>title</p>
					<p>desc</p>
				</div>
			</div>
		</section>
	)
}

export default TaskItem