(function($){
	$.quiz = function(el, options){
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;
		
		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;
		
		// Add a reverse reference to the DOM object
		base.$el.data("quiz", base);
		
		base.init = function() {
			base.options = $.extend({},$.quiz.defaultOptions, options);
			base.questions = [];
			base.answers = [];
			base.correctness = []
			
			// Mark as quizzed
			base.$el.addClass("quizzler");
			
			// Load questions
			base.$el.find("ul.questions li.question").each(function() {
				var question = this;
				question.el = this;
				question.$el = $(this);
				base.questions.push(question);
				
				// Load answers
				question.answers = [];
				question.$el.find("ul li.answer").each(function() {
					var answer = this;
					answer.el = this;
					answer.$el = $(this);
					question.answers.push(answer);
					
					answer.$el.click(function() {
						$(question.answers).removeClass("checked");
						$(this).addClass("checked");
						$(this).find("input").attr("checked", "checked");
						base.$el.find(".check.button").addClass("enabled");
					});
				});
			});
			
			// Load or create the progress pane
			base.$el.find("div.progress").each(function() {
				base.progress = this;
				base.progress.el = this;
				base.progress.$el = $(this);
			})
			if(base.progress) {
				base.progress.$el.empty();
			} else {
				base.progress = $("<div />")
					.addClass("progress")
					.appendTo(base.$el);
				base.progress.el = base.progress[0];
				base.progress.$el = $(base.progress);
			}
			
			// Load or create the result pane
			base.$el.find("div.result").each(function() {
				base.result = this;
				base.result.el = this;
				base.result.$el = $(this);
			})
			if(base.result) {
				base.result.$el.empty();
			} else {
				base.result = $("<div />")
					.addClass("result")
					.appendTo(base.$el);
				base.result.el = base.result[0];
				base.result.$el = $(base.result);
			}
			
			// Load or create the next pane
			base.$el.find("div.next").each(function() {
				base.next = this;
				base.next.el = this;
				base.next.$el = $(this);
			})
			if(base.next) {
				base.next.$el.empty();
			} else {
				base.next = $("<div />")
					.addClass("next")
					.appendTo(base.$el);
				base.next.el = base.next[0];
				base.next.$el = $(base.next);
			}
			
			// Load or create the share pane
			base.$el.find("div.share").each(function() {
				base.share = this;
				base.share.el = this;
				base.share.$el = $(this);
			})
			if(base.share) {
				base.share.$el.detach();
			}
			
			// Begin the quiz
			if(base.questions.length > 0)
				base.loadQuestion(base.options.startIndex);
		};
		
		base.loadAnswer = function(index) {
			if(typeof base.questions[index] === 'undefined')
				return;
				
			// Show the answers
			$(base.questions[index]).addClass("complete");
			
			// Lock down the question
			$(base.questions[index]).find("input").attr("disabled", "disabled");
			$(base.questions[index].answers).unbind("click");
			
			// Populate result pane
			base.result.$el.empty();
			var explanationText = $(base.questions[index]).find(".explanation").text();
			var verdict = $("<span />")
				.addClass("verdict")
				.text((base.correctness[index]?"Correct":"Incorrect") + (explanationText?": ":" "))
				.appendTo(base.result.$el);
			var explanation = $("<span />")
				.addClass("explanation")
				.text(explanationText)
				.appendTo(base.result.$el);
			
			// Populate progress pane
			base.updateProgress(index + (base.options.progressType=="remaining"?1:0));
			
			// Populate next pane
			base.next.$el.empty();
			if(index == base.questions.length - 1) {
				// We're on the last question
				var submitButton = $("<div />")
					.addClass("submit")
					.addClass("button")
					.addClass("enabled")
					.text("View Final Score")
					.bind('click', function(ev) {
						if(base.storeAnswer(index) || !base.options.requireAnswers);
							base.submitAnswers();
					})
					.appendTo(base.next.$el);
			} else {
				var nextButton = $("<div />")
					.addClass("next")
					.addClass("button")
					.addClass("enabled")
					.text("Next Question")
					.bind('click', function(ev) {
						base.loadQuestion(index+1);
					})
					.appendTo(base.next.$el);
			}
		};
		
		base.loadQuestion = function(index) {
			if(typeof base.questions[index] === 'undefined')
				return;
				
			$(base.questions).hide();
			base.questions[index].$el.show();
			
			// Clear past results
			base.result.$el.empty();
			
			// Populate progress pane
			base.updateProgress(index);

			// Populate next pane
			base.next.$el.empty();
			var nextButton = $("<div />")
				.addClass("check")
				.addClass("button")
				.text("See answer")
				.bind('click', function(ev) {
					if(base.storeAnswer(index) || !base.options.requireAnswers)
						base.loadAnswer(index);
				})
				.appendTo(base.next.$el);
		};
		
		base.updateProgress = function(index) {
			base.progress.$el.empty();
			var progressBarContainer = $("<div />")
				.addClass("container")
				.appendTo(base.progress.$el);
			var progressBar = $("<div />")
				.addClass("bar")
				.addClass("question-" + index)
				.css("width", (index / base.questions.length * 100) + "%")
				.appendTo(progressBarContainer);
			var progressSummary = $("<div />")
				.addClass("summary")
				.appendTo(base.progress.$el);
			var progressSummaryTotal = $("<span />")
				.addClass("total")
				.text(index + (base.options.progressType=="remaining"?0:1) + " of " + base.questions.length)
				.appendTo(progressSummary);
			var progressSummaryExplanation = $("<span />")
				.addClass("explanation")
				.text(" questions completed")
				.appendTo(progressSummary);
		}
		
		base.storeAnswer = function(index) {
			if(typeof base.questions[index] === 'undefined')
				return;
				
			base.answers[index] = base.questions[index].$el.find("li.answer input:checked").attr("value");
			base.correctness[index] = base.questions[index].$el.find("li.answer input:checked").parent().hasClass("correct");
			if(typeof base.answers[index] === 'undefined') {
				base.answers[index] = '';
				base.correctness[index] = false;
				return false;
			}
			return true;
		}
		
		base.submitAnswers = function() {
			base.$el.addClass("complete");
			
			// Hide the questions
			$(base.questions).hide();
			base.progress.$el.hide();
			base.result.$el.empty();
			
			var header = $("<div />")
				.addClass("header")
				.text("Results")
				.appendTo(base.result.$el)
			
			var correctCount = 0;
			for(x in base.correctness)
				correctCount += (base.correctness[x]?1:0);
			
			var total = $("<div />")
				.addClass("total")
				.text("You got " + correctCount + " out of " + base.correctness.length + " question" + (base.correctness.length!=1?"s":"") + " correct.")
				.appendTo(base.result.$el);
			
			// Populate next pane
			base.next.$el.empty();
			var nextButton = $("<div />")
				.addClass("repeat")
				.addClass("button")
				.addClass("enabled")
				.text("Take quiz again")
				.bind('click', function(ev) {
					location.reload();
				})
				.appendTo(base.next.$el);
			base.next.$el.detach()
				.appendTo(base.result.$el);
				
			// Show share pane
			base.share.$el.appendTo(base.result.$el);
		}
		
		// Run initializer
		base.init();
	};
	
	$.quiz.defaultOptions = {
		requireAnswers: false,
		showAnswer: true,
		startIndex: 0,
		progressType: "remaining"
	};

	$.fn.quiz = function(options){
		return this.each(function(){
			(new $.quiz(this, options));
		});
	};
})(jQuery);