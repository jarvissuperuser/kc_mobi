/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app_events = {
	hide_views:function () {
		$(".full_screen").hide();
		$(".full_screen").removeClass("hide");
		$(".button-collapse").sideNav("hide");
	},
	show_view:function (view) {
		app_events.hide_views();
		var s = "." + view ;
		$(s).show();
		$(".half_screen").show();
	},
	show_signup:function () {
		app_events.show_usera();
		$("#login").hide();
		$("#register").fadeIn("slow");
	},
	show_signin:function () {
		app_events.show_usera();
		$("#register").hide();

		$("#login").fadeIn("slow");
	},
	show_usera:function () {
		$(".subview").hide();
		$(".user_access").removeClass("hide");
		$(".user_access").show();
	},
	change_views:function () {
		var page = location.hash.slice(1,location.hash.length);
		console.log(page);
		app_events.show_view(page);
	}
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();