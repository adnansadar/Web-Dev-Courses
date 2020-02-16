<?php include 'server-info.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<title>System Info</title>
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<body>
	<div class="container"><!--Alligns the content in the center.-->
		<h1>Server & File Info</h1>
		<?php  if($server):?>
			<ul class="list-group"><!--Arranges the list seperately and systematically.-->
				<?php foreach ($server as $key => $value): ?>
					<li class="list-group-item">
						<strong><?php echo $key; ?>:</strong>
						<?php echo $value; ?>
					</li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>
	</div>
	<br>

	<div class="container"><!--Alligns the content in the center.-->
		<h1>Client Info</h1>
		<?php  if($client):?>
			<ul class="list-group"><!--Arranges the list seperately and systematically.-->
				<?php foreach ($server as $key => $value): ?>
					<li class="list-group-item">
						<strong><?php echo $key; ?>:</strong>
						<?php echo $value; ?>
					</li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>
	</div>
</body>
</html>