from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/map')
def map():
	return render_template('map.html')

@app.route('/request')
def request():
	return render_template('request.html')


@app.route('/draagvlakkie')
def draagvlakkie():
	return render_template('draagvlakkie.html')


@app.route('/finish')
def finish():
	return render_template('finish.html')

@app.route('/progress')
def progress():
	return render_template('progress.html')


@app.route('/submit')
def submit():
	return render_template('submit.html')

@app.route('/zoom')
def zoom():
	return render_template('zoom.html')