if (window.location.href.indexOf('/external-forms/') != -1) {
    var submitButton = $('.form-default').find('input[type=submit]');
    if (!submitButton.length) {
        // get the url after successful form submission
        var url = window.location.href;
        window.top.postMessage(JSON.stringify({ thankyouPageUrl: url }), "*");
    }

    var validationLabels = $('.EditingFormErrorLabel');
    if (validationLabels.length) {
        // indicates validation errors, resulting into postback..
        window.top.postMessage(JSON.stringify({ validationErrorState: 'Error' }), "*");
    }

    submitButton.on('click', function () {
        window.top.postMessage(JSON.stringify({ submitState: 'Submitted' }), "*");
    });
}

/* Begin Scripts Sonova */
$(document).ready(function () {
// Scroll to top
(function () {
    var scrollToTop = $('.j-scroll-top');
    scrollToTop.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
})();

// Anchor slide effect with offset
(function () {
    var $anchorLinks = $('a[href^="#"]').not(".j-tab");

    // Set offset for
    var offset = 114; // header + 30px

    if ($(window).width() < 768) {
        offset = 66; // header + 20px
    }

    // Event click listener
    $anchorLinks.click(function (event) {
        event.preventDefault();
        // Scroll to position - offset
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - offset
        }, 500);
    });

})();

// Survey form submit
(function () {
  $('#survey_submit').on('click', function () {
    var url = $(this).data('url');
    var code = $('#survey_code').val();
    window.location.href = url + '?c=' + code;
  });
})();

// Header functions
(function () {
  var togglerNav = document.querySelector(".j-toggle-nav");
  var toggleMobileSearch = document.querySelector(".j-mobile-search-toggle");
  var mobileSearch = document.querySelector(".j-mobile-search");
  var header = document.querySelector(".j-header");
  var headerMobile = document.querySelector(".j-header-mobile");
  var bodyElem = document.querySelector("body");
  var $toggleSubmenuLink = $('.j-toggle-mob-submenu');
  var owlMenu = $('.j-carousel-menu');
  var toggleSearch = $(".j-search-toggle");
  var search = $(".j-search");
  var flyoutCloseTimer;
  var flyoutOpenTimer;

  // Flyout anchor iPad fix
  $(".j-flyout a").on("click touchend", function (e) {
    var el = $(this);
    var link = el.attr("href");
    window.location = link;
  });

  // Window scroll listener doing magic with header
  if (header) {
    window.onscroll = headerChange;
  }

  // Open mobile menu
  if (togglerNav && headerMobile) {
    togglerNav.addEventListener("click", function () {
      toggleNav();
    });
  }

  // Open mobile search
  if (toggleMobileSearch && mobileSearch) {
    toggleMobileSearch.addEventListener("click", function () {
      toggleMobSearch();
    })
  }

  // Header opacity on scroll
  function headerChange() {
    var currentScroll = window.pageYOffset | document.body.scrollTop;
    var offset = 80; // Set offset from top

    if (currentScroll > offset) {
      header.classList.add("scroll");
      headerMobile.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
      headerMobile.classList.remove("scroll");
    }
  }

  function toggleNav() {

    if (bodyElem.classList.contains("search-opened")) {
      headerMobile.classList.remove("search-opened");
      bodyElem.classList.remove("search-opened");
    }

    headerMobile.classList.toggle("nav-opened");
    bodyElem.classList.toggle("nav-opened");
  }

  function toggleMobSearch() {

    if (bodyElem.classList.contains("nav-opened")) {
      headerMobile.classList.remove("nav-opened");
      bodyElem.classList.remove("nav-opened");
    }

    headerMobile.classList.toggle("search-opened");
    bodyElem.classList.toggle("search-opened");
  }

  // MouseOver Link in menu
  $(".j-flyout-link")
    .mouseout(CloseFlyouts)
    .mouseover(function (e) {
      clearTimeout(flyoutCloseTimer);
      clearTimeout(flyoutOpenTimer);
      flyoutOpenTimer = setTimeout(function () {
        // first hide notused
        $(".j-flyout-link").removeClass("active");
        $(".j-flyout").removeClass("active");
        // then open current
        var currentFlyoutElem = $(e.target);
        currentFlyoutElem.addClass("active");
        var currentFlyout = "." + currentFlyoutElem.data("flyout");
        $(currentFlyout).addClass("active");
      }, 200);
    });

  // MouseOver Flyout
  $(".j-flyout")
    .mouseout(CloseFlyouts)
    .mouseover(function (e) {
      clearTimeout(flyoutOpenTimer);
      clearTimeout(flyoutCloseTimer);
    });

  function CloseFlyouts() {
    clearTimeout(flyoutOpenTimer);
    flyoutCloseTimer = setTimeout(function () {
      $(".j-flyout-link").removeClass("active");
      $(".j-flyout").removeClass("active");
    }, 100);
  }

  // Toggle Mobile Submenu
  $toggleSubmenuLink.click(function () {
    $(this).closest('li').toggleClass('active');
  });

  // Carousel mobile navigation
  owlMenu.owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    autoplay: false,
    items: 1,
  });

  // Search
  toggleSearch.click(function () {
    console.log("Opening search");
    openSearch();
  });
  function openSearch() {
    search.toggleClass("active");
    toggleSearch.toggleClass("active");
  }

})();
// Toggle mobile footer menu
(function () {
    var $footerMenuLink = $('.j-footer .j-footer-menu-toggle');
    // Event click
    $footerMenuLink.click(function () {
        $(this).closest('.j-footer-menu').toggleClass('active');
    });
})();
// Kentico Generated Form Submit button
// Version: 1.0
// Author: Michal Měcháček; Sprinx Systems a.s.
(function () {
    var submitButton = document.querySelectorAll(".sx-form .FormButton");

    for (i = 0; i < submitButton.length; i++) {
        // Get settings
        var currSubmitButton = submitButton[i];
        var currParent = currSubmitButton.parentElement;
        var buttonWrapper = document.createElement("span");
        buttonWrapper.classList.add("FormButtonWrapper");

        // Structure generation
        currParent.appendChild(buttonWrapper);
        buttonWrapper.appendChild(currSubmitButton);
    }
})();

/* Disable button to prevent double submit */
$(document).ready(function () {
  $("div.sx-form input.FormButton").click(function () {
    
    //This is now handled in /CMS/CMSScripts/Sonova/inline-validation.js

    //var $submitBtn = $(this);
    //$submitBtn.click(function () { return false; });
    //$submitBtn.attr('onclick', 'return false;');
    //$submitBtn.addClass("btn-disabled");
    //$submitBtn.attr("value", RS.formSending);
    //return true;
  });
});
// Kentico Generated select field DOM Update
// Version: 1.0
// Author: Michal Měcháček; Sprinx Systems a.s.
(function () {
  var dropDownLists = document.querySelectorAll(".sx-form .DropDownField");

  for (i = 0; i < dropDownLists.length; i++) {
    // Get settings
    var currDropDown = dropDownLists[i];
    var currParent = currDropDown.parentElement;
    var dropDownWrapper = document.createElement("span");
    dropDownWrapper.classList.add("DropDownListControl");

    // Structure generation
    currParent.appendChild(dropDownWrapper);
    dropDownWrapper.appendChild(currDropDown);
  }

})();
// Kentico Generated upload DOM update
// Version: 1.0
// Author: Michal Měcháček; Sprinx Systems a.s.
(function () {
  var uploadFields = document.querySelectorAll(".sx-form .uploader-upload");

  for (var i = 0; i < uploadFields.length; i++) {
    
    // Get elements
    var uploadFileText = document.createElement("span");
    var uploadInput = uploadFields[i].querySelector(".uploader-input-file");
    var uploadButton = document.createElement("label");

    // CSS Classes
    uploadFileText.classList.add("uploader-text");
    uploadButton.classList.add("uploader-button");
    uploadButton.htmlFor = uploadInput.id;

    // Localization of button and default text field
    // Don't forget add global var ResourceStrings object with Localization
    if (typeof ResourceStrings !== "undefined") {
      uploadButton.innerHTML = ResourceStrings.FileInputButton;
      uploadFileText.innerHTML = ResourceStrings.FileInputField;
    } else {
      uploadButton.innerHTML = "Browse...";
      uploadFileText.innerHTML = "No file selected.";
    }

    // Update container structure
    uploadFields[i].appendChild(uploadFileText);
    uploadFields[i].appendChild(uploadButton);

    // Add event handler for update the text
    uploadInput.addEventListener("change", function () {
      processFileNames(this);
    });

  }

  function processFileNames(fileInput) {
    var files = fileInput.files;
    var str = "";

    for (var file = 0; file < files.length; file++) {
      str += files[file].name;
      if (files.length > 1) {
        str += "; ";
      }
    }

    var textLabel = fileInput.parentElement.querySelector(".uploader-text");
    textLabel.innerHTML = str;
  }

})();
// Handle tracking fields
// Author: Cosmin Ivan, Futurecom
(function () {

    hideFields();
    populateFieldsFromQueryString();

    function hideFields() {
        $(".son_tracking_field").hide();
    }

    function populateFieldsFromQueryString() {
        var qs = parseQueryString();
        populateFieldFromQueryString(".son_form_source", qs.source);
        populateFieldFromQueryString(".son_form_info", qs.info);
        populateFieldFromQueryString(".son_form_utm_campaign", qs.utmCampaign);
        populateFieldFromQueryString(".son_form_tag", qs.tag);
        populateFieldFromQueryString(".son_form_optin_email", qs.optin_email);
        populateFieldFromQueryString(".son_form_optin_sms", qs.optin_sms);
        populateFieldFromQueryString(".son_form_preferred_store", qs.preferredStore);
        populateFieldFromQueryString(".son_form_ht_conducted", qs.htConducted);
        populateFieldFromQueryString(".son_form_utm_medium", qs.utmMedium);
        populateFieldFromQueryString(".son_form_utm_source", qs.utmSource);
        populateFieldFromQueryString(".son_form_form_name", qs.formName);
    }

    function populateFieldFromQueryString(selector, value) {
        if (typeof value != 'undefined') {
            $(selector).val(value);

            if (selector == ".son_form_optin_email" || selector == ".son_form_optin_sms" || selector == ".son_form_ht_conducted")
                $(selector).change();
        }
    }

}) ()

function parseQueryString() {
    var queryString = window.location.search.substring(1);
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
(function () {
    var $input = $(".j-predictive-location-input").find("input");
    var dropdownOutput = $(".j-predictive-location-output");
    var $outputSelect = dropdownOutput.find("select");

    // disable on load
    //$outputSelect.attr('disabled', 'disabled');

    $outputSelect.change(function () {
        var hiddenStoreCode = dropdownOutput.find('#HiddenStoreCode');
        hiddenStoreCode.val($(this).val());
    });

    /*
    $input.blur(function () {
        var request = {
            Zip: $input.val()
        };
        if ($input.val().length > 0) {
            // ajax get stores from handler if PLZ inserted
            $.post("/CMSPages/Sonova/LocationListHandler.ashx", JSON.stringify(request), function (data) {
                var out = data;
                $outputSelect.empty();
                $.each(out.data, function (val, text) {
                    $outputSelect.append(
                        $('<option></option>').val(text.Value).html(text.Name)
                    );
                });
                // again enable if something exists or disable it
                if (out.data.length > 1) {
                    $outputSelect.removeAttr('disabled');
                } else {
                    $outputSelect.attr('disabled', 'disabled');
                }
            });
        }
    });
    */

    $input.keyup(function () {
        var request = {
            Zip: $input.val(),
            DisplayFormat: $('#GeoDisplayValue').val(),
            ValueFormat: $('#GeoValue').val(),
            customUrlParameters: $('#GeoCustomUrlParametersValue').val()
        };
        if ($input.val().length > 3) {
            // ajax get stores from handler if PLZ inserted
            $.post("/CMSPages/Sonova/LocationListHandler.ashx", JSON.stringify(request), function (data) {
                var out = data;
                $outputSelect.empty();
                $outputSelect.attr('disabled', 'disabled');
                $.each(out.data, function (val, text) {
                    $outputSelect.append(
                        $('<option></option>').val(text.Value).html(text.Name)
                    );
                });
                // again enable if something exists or disable it
                if (out.data.length > 1) {
                    $outputSelect.removeAttr('disabled');
                } else {
                    $outputSelect.attr('disabled', 'disabled');
                }
            });
        }
    });

})();
// Accordion
(
    function () {
        var $accordion = document.querySelectorAll(".j-accordion .toggle");

        for (var i = 0; i < $accordion.length; i++) {

            var _this = $accordion[i];
            var acoParent = $accordion[i].parentElement;

            _this.addEventListener("click", function () {
                toggleAccordion(this);
            }, false);
        }

        function toggleAccordion(_current) {
            var currentBlock = _current.parentNode;
            var multiple = _current.parentNode.classList.contains("multiple"); // Default settings for accordion

            var isExpanded = _current.parentNode.classList.contains("expanded");

            if (multiple) { 
                currentBlock.classList.toggle("expanded");
            } else if (!isExpanded) {
                for (var i = 0; i < $accordion.length; i++) {
                    $accordion[i].parentNode.classList.remove("expanded");
                }
                currentBlock.classList.add("expanded");
            } else {
                currentBlock.classList.remove("expanded");
            } 
        }
    }
)();

// appointmenttypeselection
(function () {
    function getSelectedValue(element) {
        if (element.dataset.url && element.dataset.value) {
            return {
                url: element.dataset.url,
                value: element.dataset.value,
            };
        }

        return undefined;
    }

    function setCookie(val) {
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'appointment-type=' + val + ';' + expires + ';path=/';
    }

    var appointmentTypeButtons = document.querySelectorAll(".j-appointment-type-button");
    // IE needs this, because querySelectorAll does not return an array
    appointmentTypeButtons = Array.prototype.slice.call(appointmentTypeButtons);

    appointmentTypeButtons.forEach(function (elem) {
        elem.addEventListener("click", function (ev) {
            // click can be in the label or button
            var elem = ev.currentTarget.querySelector('.j-appointment-type-option');
            var val = getSelectedValue(elem ? elem : ev.currentTarget);

            if (typeof val === 'undefined') {
                setCookie('');
            } else {
                setCookie(val.value);
                document.location.href = val.url;
            }
            ev.preventDefault();
            return false;
        }, false);
    });


    var appointmentTypeButtonsNew = document.querySelectorAll(".j-appointment-type-button-n");
    // IE needs this, because querySelectorAll does not return an array
    appointmentTypeButtonsNew = Array.prototype.slice.call(appointmentTypeButtonsNew);

    appointmentTypeButtonsNew.forEach(function (elem) {
        elem.addEventListener("click", function (ev) {
            var val = getSelectedValue(elem);

            if (typeof val === 'undefined') {
                setCookie('');
                return true;
            } else {
                setCookie(val.value);
                document.location.href = val.url;
            }
            ev.preventDefault();
            return false;
        }, false);
    });
})();
(function () {

    /* Comparator global vars */
    var $comparatorSlider = $(".j-product-slider-comparator");
    var wantedItem = $comparatorSlider.find(".j-item-wanted").index();

    /******************
        Progress bar
    *******************/
    var $progressIcon = $comparatorSlider.find(".j-progress-value");
    var radius;
    var circumference;

    if ($progressIcon.length > 0) {
        radius = $progressIcon[0].r.baseVal.value;
        circumference = radius * 2 * Math.PI;

        $progressIcon.css("stroke-dasharray", circumference + ", " + circumference);
        $progressIcon.css("stroke-dashoffset", circumference);
    }

    // Function set progress
    function setProgress(percent, i) {
        var offset = circumference - percent / 100 * circumference;
        $progressIcon.eq(i).css("stroke-dashoffset", offset);
    }

    // Set value
    if ($progressIcon.length > 0) {
        $progressIcon.each(function (i) {
            var $that = $progressIcon.eq(i);
            var value = $that.attr("data-percent");

            if (value > 0 && value <= 100) {
                setProgress(value, i);
            }
        });
    }
        


    /************************
        Slider Comparator
    ************************/

    // Init slideru
    $comparatorSlider.owlCarousel({
        items: 1.2,
        loop: false,
        nav: false,
        dots: true,
        center: true,
        margin: 15,
        startPosition: wantedItem,
        responsive: {
            1920: { items: 7.2 },
            1600: { items: 6 },
            1440: { items: 5.8 },
            1280: { items: 4.5 },
            1170: { items: 4.5 },
            992: { items: 4 },
            960: { items: 3.5 },
            800: { items: 3 },
            768: { items: 2.6 },
            600: { items: 2.5 },
            520: { items: 2.25 },
            480: { items: 2 },
            380: { items: 1.5 },
            0: { items: 1.3 }
        }
    });

})();
(function () {
    /* Category selector */
    $('.j-product-selector-carousel').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        nav: true,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-btn-arrow' viewBox='0 0 20 20'><path d='M6.8 9.2L12.2 6l.4-.1c.3 0 .5.1.7.4.2.4.1.9-.3 1.1L8.7 10l4.3 2.5c.4.2.5.7.3 1.1-.2.4-.7.5-1.1.3l-5.4-3.2s-.4-.2-.4-.7c0-.6.4-.8.4-.8z'/></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-btn-arrow' viewBox='0 0 20 20'><path d='M13 10.7l-5.4 3.2-.4.1c-.3 0-.5-.1-.7-.4-.2-.4-.1-.9.3-1.1l4.3-2.6-4.3-2.5c-.4-.2-.5-.7-.3-1.1.2-.4.7-.5 1.1-.3L13 9.2s.4.2.4.7c0 .6-.4.8-.4.8z'/></svg>"],
        dots: false,
        responsive: {
            0: {
                items: 3,
            },
            420: {
                items: 4,
            },
            500: {
                items: 4,
            },
            700: {
                items: 4,
            },
            1000: {
                items: 5,
            }
        }
    });

    /* Product Gallery */
    $('.j-product-info-carousel').owlCarousel({
        loop: false,
        margin: 10,
        items: 1,
        nav: false,
        dots: true
    });

    /* Partners Gallery */
    $('.j-partners-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        center: true,
        stagePadding: 50,
        nav: false,
        responsive: {
            0: {
                margin: 10,
                items: 1.5
            },
            500: {
                margin: 20,
                items: 5
            },
            1000: {
                items: 7,
                margin: 30
            }
        }
    });
})();
(function () {
    // Fullwidth carousel with stagePadding
    $(".j-slider-articles-full-size").owlCarousel({
        nav: false,
        dots: true,
        dotsEach: true,
        loop: true,
        margin: 16,
        responsive: {
            0: { items: 1, stagePadding: 16 },
            768: { items: 2, stagePadding: 16 },
            1100: { items: 2, stagePadding: 48 },
            1240: { items: 2, stagePadding: 96 },
            1280: { items: 2, stagePadding: 128 },
            1366: { items: 2, stagePadding: 160 },
            1440: { items: 2, stagePadding: 204 },
            1536: { items: 2, stagePadding: 252 },
            1600: { items: 2, stagePadding: 286 },
            1680: { items: 2, stagePadding: 324 },
            1920: { items: 2, stagePadding: 436 }
        }
    });

    // Normal Grid size carousel
    $(".j-slider-articles").owlCarousel({
        nav: false,
        dots: true,
        dotsEach: true,
        loop: true,
        margin: 16,
        responsive: {
            0: { items: 1 },
            768: { items: 2 }
        }
    });
})();
(function () {
    var $signUpBox = $(".j-signup-box");
    var $tabs = $signUpBox.find(".j-tab");
    var $content = $signUpBox.find(".j-content");

    // Event Listeners
    $tabs.on("click", function (event) {
        $that = $(this);
        target = $($that.attr("href"));
        // Change active class to event target
        $tabs.removeClass("active");
        $that.addClass("active");

        // Hide all and open targeted
        $content.children().hide(0).removeClass("active");
        target.show(0).addClass("active");

        event.stopPropagation();
        return false;
    });
})();
/* Contact Popup */
(function () {

    // Vars
    var $contactButton = $(".j-contact-popup-open");
    var $contactButtonContainer = $(".j-contact-button");
    var $contactContent = $(".j-contact-popup-content");
    var $contactButtonClose = $(".j-contact-popup-close");
    var $contactAnimWrapper = $(".j-contact-anim-wrapper");
    var transitionTime = 250;
    var transitionTimeClose = 150;
    var bodyElem = $("body");

    // Hiding and showing vars
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
        
    // Open contact
    function openContactPopup() {
        $contactAnimWrapper.addClass("active");
        setTimeout(function () {
            $contactContent.addClass("active");
            bodyElem.addClass("contact-opened");
        }, transitionTime);
    }

    // Close contact
    function closeContactPopup() {
        $contactContent.removeClass("active");
        setTimeout(function () {
            $contactAnimWrapper.removeClass("active");
            bodyElem.removeClass("contact-opened");
        }, transitionTimeClose);
    }

    // Show contact button if scrolling up
    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > 700) {
            $contactButtonContainer.addClass('contact-shown');
            $contactAnimWrapper.addClass('contact-shown');
        } else {
            $contactButtonContainer.removeClass('contact-shown');
            $contactAnimWrapper.removeClass('contact-shown');
        }

        lastScrollTop = st;
    }

    // Listeners
    $contactButton.click(function () {
        openContactPopup();
    });
    $contactButtonClose.click(function () {
        closeContactPopup();
    });

    // Scrolling listener
    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

})();
/* Boots Filter tabs */
(function () {
  var $container = $(".j-filter-tabs");
  var $tabs = $container.find(".j-tab");
  var $content = $container.find(".j-content");
  var $tables = $content.find(".j-table");
  var canSwitch = true; // useful delay to avoid visual artefuckt and let behavior fully animated :>

  // Mobile selectmenu
  var $mobileSwitchDropdown = $container.find(".j-filter-table");
  console.log($mobileSwitchDropdown);

  // Re-render height + show tables
  function renderTabsHeight() {
    /* check if horizontal version */
    if (window.innerWidth >= 1200) {
      $tabs.animate(
        {
          height: $content.height() + 48 + "px"
        },
        50,
        "swing",
        function () {

          setTimeout(
            function () {
              $content.animate(
                {
                  opacity: 1
                },
                100
              );
              if ($content.hasClass("tab-1")) {
                $content.removeClass("tab-1");
              }
            }
            , 100);
        }
      );
    } else {
      $content.animate(
        {
          opacity: 1
        },
        100
      );
    }
  }

  // change table function
  function changeTable(newTable) {
    //console.log("Old height: " + $content.height());
    $tables.css("display", "none");

    if (newTable !== "all") {
      $('[data-table=' + newTable + ']').css("display", "table");
    } else {
      $tables.css("display", "table");
    }
    renderTabsHeight();
  }

  /* Initial */
  renderTabsHeight();

  /* Event listeners */
  $tabs.on("click", function () {
    // Check if possible switch tabs
    if (!canSwitch || $(this).hasClass("active")) {
      return false;
    } else {
      // turn of temporary switch
      var $that = $(this);
      var newFilter = $that.data("filter");
      canSwitch = false;

      $content.animate(
        {
          opacity: 0
        },
        100,
        // call filter
        changeTable(newFilter)
      );

      // set element active
      $tabs.removeClass("active");
      $that.addClass("active");

      setTimeout(function () {
        canSwitch = true;
      }, 350);
    }
  });

  $mobileSwitchDropdown.change(function () {
    var selected = $(this).val();
    changeTable(selected);
  });

  function showNumberOfAids(number) {
    $('td.j-tableItem, th.j-tableItem').each(function () {
      var $this = $(this);
      $this.text($this.data('text' + number));
      if ($this.data('column' + number)) {
        $this.attr('data-column', $this.data('column' + number));
      }
    });
  }
  function filterBrands(brand) {
    if (brand === 'all') {
      $('tr.j-tableRow').show();
    } else {
      $('tr.j-tableRow').hide();
      $('tr.j-tableRow.j-brand-' + brand).show();
    }
    renderTabsHeight();
  }
  function sortTable(parent, dataField) {
    var $parent = $(parent);
    var items = $parent.children("tr.j-tableRow")
    items.sort(function (a, b) {
      return $(a).data(dataField) > $(b).data(dataField) ? 1 : -1;
    });
    items.detach().appendTo($parent);
  }
  function sortTables(dataField) {
    $("table.j-table tbody").each(function () {
      sortTable(this, dataField);
    });
  }
  window.tableFilter = {
    showNumberOfAids: showNumberOfAids,
    filterBrands: filterBrands,
    sortTables: sortTables
  };
})();
// Store locator widget
(function() {
	var ENTER = 13;

	var storeLocator = $('section.j-storeLocator');
	var textInput = $(storeLocator).find("input[type='text']");
	var submitInput = $(storeLocator).find("input[type='submit']");
	var redirectUrl = $(storeLocator).find("input[type='hidden']").val();

	$(textInput).keyup(function(e) {
		var code = e.which;
		
		if (code == ENTER)
			redirect();
	});

	$(submitInput).click(function(e) {
		e.preventDefault();
		redirect();
	});

	function redirect() {
		var searchText = $(textInput).val();
		var fullRedirectUrl = redirectUrl.format(searchText);

		window.location = fullRedirectUrl;
	}

	String.prototype.format = function () {
		var a = this;
	
		for (var k in arguments) {
			if (arguments.hasOwnProperty(k)) {
				a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
			}
		}

		return a;
	}
})();
// Video Popup
(function () {
    $('.j-video-popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
})();
$(document).on('click', '.bts_01-accordion-trigger', function (e) {
    e.preventDefault();
    var accordion = $(this);
    accordion.parent().toggleClass('open');
});

/*
    To maintain the anchor title visible when loaded from link is external 
    https://jira.wunderman.ch/browse/SON-76
*/

$(function () {
    // Only set the timer if you have a hash
    if (window.location.hash) {
        setTimeout(delayedFragmentTargetOffset, 50);
    }
});

function delayedFragmentTargetOffset() {
    var offset = $(':target').offset();
    if (offset) {
        // only screen and (max-width: 767px)
        var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
        var scrollto = offset.top - (isMobile ? 70 : 110); // minus fixed header height
        $('html, body').animate({ scrollTop: scrollto }, 0);
    }
};
// end $(document).ready()
});
// Dropdown button - show and hide dropdown menu logic
document.getElementsByTagName("body")[0].onclick = function () { console.log("IE"); };
$(document).click(function (event) {
    // IE 11 workaround
    var matches = event.target.matches ? event.target.matches('.sn-dropdown-btn') : event.target.msMatchesSelector('.sn-dropdown-btn');
    if (matches) {
        var element = $('#' + $(event.target).attr('data-dropdown-id'));
        if (element.hasClass('dropdown-btn-content-show')) {
            element.removeClass('dropdown-btn-content-show'); 
        } else {
            element.addClass('dropdown-btn-content-show'); 
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
    } else {
        $('.dropdown-btn-content').each(function() {
            if ($(this).hasClass('dropdown-btn-content-show')) {
                $(this).removeClass('dropdown-btn-content-show');
            }
        });
    }
});
//adds attributes to specific controls in forms of Schoonenberg website
//see ticket SON-500

$( document ).ready(function() {

    //get site name
    var siteName = $('#SiteNameForJS').val();

    //enable for Schoonenberg only
    if (typeof siteName === 'undefined' || siteName.indexOf('Schoonenberg') === -1) {
        return;
    }

    //does page have a form?
    var hasForm = $('form').length > 0;

    if (!hasForm) {
        return;
    }

    //everything is fine. We start to add the attributes

    //definition for controls and attributes to add. Control ids may be different depending on the form which is used
    var attributesToAdd = {
        "controls": [
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_Zip_Store_txtText", //Zip_Store
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl03_Sonova_BizForm_viewBiz_Zip_Store_txtText", //Zip_Store
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_Firstname_txtText", //Firstname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl03_Sonova_BizForm_viewBiz_Firstname_txtText", //Firstname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl02_Sonova_BizForm_viewBiz_Firstname_txtText", //Firstname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl06_Sonova_BizForm_viewBiz_Firstname_txtText", //Firstname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_Surname_txtText", //Surname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "family-name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl03_Sonova_BizForm_viewBiz_Surname_txtText", //Surname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "family-name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl02_Sonova_BizForm_viewBiz_Surname_txtText", //Surname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "family-name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl06_Sonova_BizForm_viewBiz_Surname_txtText", //Surname
                "attributes": [
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "family-name"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_EmailAddress_txtText", //EmailAddress
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "autocapitalize",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "email"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl03_Sonova_BizForm_viewBiz_EmailAddress_txtText", //EmailAddress
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "autocapitalize",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "email"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl02_Sonova_BizForm_viewBiz_EmailAddress_txtText", //EmailAddress
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "autocapitalize",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "email"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl06_Sonova_BizForm_viewBiz_EmailAddress_txtText", //EmailAddress
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "email"
                    },
                    {
                        "attributeName": "autocapitalize",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "email"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_Phone_txtText", //Phone
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "tel"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl03_Sonova_BizForm_viewBiz_Phone_txtText", //Phone
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "tel"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl02_Sonova_BizForm_viewBiz_Phone_txtText", //Phone
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "tel"
                    }
                ]
            },
            {
                "controlId" : "p_lt_ctl06_pageplaceholder_p_lt_ctl06_Sonova_BizForm_viewBiz_Phone_txtText", //Phone
                "attributes": [
                    {
                        "attributeName": "type",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "inputmode",
                        "attributeValue": "tel"
                    },
                    {
                        "attributeName": "autocorrect",
                        "attributeValue": "off"
                    },
                    {
                        "attributeName": "autocomplete",
                        "attributeValue": "tel"
                    }
                ]
            }
        ]

        
    }


    //start processing definition and add attributes
    for (var i = 0; i < attributesToAdd.controls.length; i++) {

        //check if control exists
        var control = $('#' + attributesToAdd.controls[i].controlId);
        
        //control found?
        if (control.length > 0) {
            
            //control does exist --> add attribute(s)
            for (var j = 0; j < attributesToAdd.controls[i].attributes.length; j++) {

                var attributeName = attributesToAdd.controls[i].attributes[j].attributeName;
                var attributeValue = attributesToAdd.controls[i].attributes[j].attributeValue;

                control.attr(attributeName, attributeValue);
            }
        } 
    }
    
    //ids of check boxes to be modified (make clickable)
    //if you have more than 1 option (Form Control setting "Multiple Choice" instead of "Check box"), take the last one to make it work
    var checkBoxesToModify = [
        'p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_Agreement_list_1',
        'p_lt_ctl06_pageplaceholder_p_lt_ctl01_Sonova_BizForm_viewBiz_Optin_email_checkbox',
        'p_lt_ctl03_Sonova_BizForm_viewBiz_Agreement_list_1',
        'p_lt_ctl06_pageplaceholder_p_lt_ctl06_Sonova_BizForm_viewBiz_Agreement_list_1',
        'p_lt_ctl03_Sonova_BizForm_viewBiz_Optin_email_checkbox',
        'p_lt_ctl06_pageplaceholder_p_lt_ctl06_Sonova_BizForm_viewBiz_Optin_email_checkbox',
        'p_lt_ctl06_pageplaceholder_p_lt_ctl02_Sonova_BizForm_viewBiz_Agreement_list_1',
        'p_lt_ctl06_pageplaceholder_p_lt_ctl02_Sonova_BizForm_viewBiz_Optin_email_checkbox'
    ];

    for (var x = 0; x < checkBoxesToModify.length; x++) {
        
        //try to get checkbox
        var checkbox = $('#' + checkBoxesToModify[x]);

        //found?
        if (checkbox.length > 0) {

            var controlExplanationText = checkbox.parent().parent().next();

            //found?
            if (controlExplanationText.length > 0 && controlExplanationText.prop('class') === 'ExplanationText') {

                //replace div tag with label tag
                var explanationText = controlExplanationText.html();
                controlExplanationText.replaceWith($('<label class="ExplanationText" for="' + checkBoxesToModify[x] + '">' + explanationText + '</label>'));

            }
        }
    }

    console.log('wt.form_attribute_modifier.js: modified attributes and labels successfully');

});
var formConfig = {};
var errorHtmlTemplate = '<span id="{0}" class="EditingFormErrorLabel InlineValidationError">{1}</span>';


//validates given control (jQuery object)
function validateControl(control) {
      
    if (formConfig.ActivateInlineValidation === false) {
        return true;
    }

    if (formConfig.ShowDebugOutput) {
        console.log('validating control');
        console.log(control);
    }
    
    if (typeof control.attr('data-control-index') === 'undefined') {

        //after page load, we assign an index to each control listed in FormControlsDefintions.
        //if no index attribute can be found, it is no control of this collection (server side generated hidden control?)
        //therefore we return true (which means that the control "validated" successfully)

        return true;
    }


    var indexFormControlsDefinitions = control.attr('data-control-index'); //zero-based index in form controls definition
    var controlConfig = formConfig.FormControlsDefinitions[indexFormControlsDefinitions];
    var controlType = controlConfig.ControlType;
    var controlCssClass = controlConfig.ControlCssClass;
    var dataType = controlConfig.DataType;
    var controlRefs = controlConfig.ControlRefClientside;
    var isRequired = controlConfig.IsRequired;
    var errorLabelId = controlType.indexOf('MultipleChoiceControl') === -1 && controlType.indexOf('RadioButtonsControl') === -1 ?  control.attr('id') + '_error' : control.parent().attr('id') + '_error'; //for multiple choice controls, we want the id of the wrapping parent element
    var val = GetControlValue(control); //value of control
    
    //validation required?
    if (!controlConfig.ValidationRequired) {
        AddOKBorder(control, controlType);
        removeHtmlElement(errorLabelId);
        return true;
    } else {

        //control has to be validated in case the user entered a value
        if (!isRequired && GetControlValue(control) === '') {
            AddOKBorder(control, controlType);
            removeHtmlElement(errorLabelId);
            return true;
        }
    }

    //is control to be validated configured as mandatory?
    if (isRequired) {

        var requiredSuccess = ValidateIsRequired(control, controlType, controlRefs, controlConfig.WatermarkText);

        if (!requiredSuccess) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageRequired));
            return false;
            //we do not proceed further checking, because there does no value exists (e.g. email address)

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }

    //data type validation needed?
    if (dataType === "integer" || dataType === "date" || controlCssClass === "DateMarker") {
        
        var dataTypeSuccess = DoDataTypeValidation(control, dataType, controlCssClass);

        if (!dataTypeSuccess.Success) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, dataTypeSuccess.ErrorMessage);
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }

    //exact length set?
    if ((dataType === "text" || dataType === "integer") && controlConfig.MinLength !== -1 && (controlConfig.MinLength === controlConfig.MaxLength)) { //doesn't make sense to check for exact size if min and max length aren't the same
        
        if (val.length !== controlConfig.MinLength) {
            
            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, formConfig.DefaultValidationErrorMessageExactLength + controlConfig.MinLength); //we always use the default message
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }

    //min length set?
    if ((dataType === "text" || dataType === "integer") && (controlConfig.MinLength !== -1)) {

        if (val.length < controlConfig.MinLength) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageMinLength + '(' + controlConfig.MinLength + ')'));
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }

    //max length set?
    if ((dataType === "text" || dataType === "integer") && (controlConfig.MaxLength !== -1)) {

        if (val.length > controlConfig.MaxLength) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageMaxLength + '(' + controlConfig.MaxLength + ')'));
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }
    
    //min value set?
    if (dataType === "integer" && controlConfig.MinValue !== -1) {

        if (val < controlConfig.MinValue) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageMinValue + '(' + controlConfig.MinValue + ')'));
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }

    //max value set?
    if (dataType === "integer" && controlConfig.MaxValue !== -1) {

        if (val > controlConfig.MaxValue) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageMaxValue + '(' + controlConfig.MaxValue + ')'));
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }

    //time value (eg. 17:53 or 05:53 pm)?
    if (controlConfig.IsTime) {

        var timeValidationSuccess = ValidateTime(control);

        if (!timeValidationSuccess) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageTime));
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }

    }

    //regexp(s) to validate?
    if (controlConfig.RegularExpressions.length > 0) {

        var validated = ProcessRegularExpressions(control,
            controlConfig,
            controlType,
            val,
            indexFormControlsDefinitions,
            errorLabelId);

        if (!validated) {
            return false;
        }
    }
    

    //Loqate service NOT enabled and e-mail?
    //in that case, we validate email pattern.
    if (formConfig.UseLoqate === false && controlConfig.IsEmail) {
        
        var emailValidationSuccess = ValidateEmail(control);
        
        if (!emailValidationSuccess) {

            showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageEmail));
            return false;

        } else {

            //remove error message
            removeHtmlElement(errorLabelId);
        }
    }
    
    //Loqate service enabled and phone or e-mail?
    //in that case, we do NOT validate email pattern.
    if (formConfig.UseLoqate === true && (controlConfig.IsEmail || controlConfig.IsPhone)) {
        
        //we have to verify with external provider an run regular expressions check after async feedback
        //Hint: even a formal correct mailaddress may be flagged as incorrect (lookup at mail provider?)
        //Hint 2: if you add characters at the end of a phone number, those get stripped before validation (shouldn't be the case in my opinion)
        //https://www.loqate.com/resources/support/apis/
        var loqateData = {
            dataToValidate: val, 
            countryCode: formConfig.DefaultCultureIso2, 
            isPhoneNumber: controlConfig.IsPhone
        }

        $.ajax({
            type: "POST",
            url: "/CMSPages/Sonova/LoqateValidationHandler.ashx",
            data: JSON.stringify(loqateData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data, status, jqXHR) {

                if ((controlConfig.IsPhone && data.Items[0].IsValid === 'Yes') || (!controlConfig.IsPhone && data.Items[0].ResponseCode === 'Valid')) {

                    //entered control value is valid
                    AddOKBorder(control, controlType);
                    return true;

                } else {

                    if (controlConfig.IsPhone) {
                        showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessagePhone));
                    } else {
                        showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, getErrorMessageText(controlConfig, formConfig.DefaultValidationErrorMessageEmail));
                    }

                    return false;
                }
            },
            error: function (request, status, error) {
                alert(request.responseText);
            }
        });


    } 
    
    AddOKBorder(control, controlType);
    return true;
}

//adds red border to control
function AddErrorBorder(control, controlType) {
    
    //checkbox list
    if (controlType.indexOf('MultipleChoiceControl') !== -1) {
        $(control).parent().parent().parent().addClass('BorderRed');
    }

    //radio button list
    if (controlType.indexOf('RadioButtonsControl') !== -1) {
        $(control).parent().parent().parent().addClass('BorderRed');
    }

    //all other controls
    if (controlType.indexOf('MultipleChoiceControl') === -1 && controlType.indexOf('RadioButtonsControl')) {
        $(control).removeClass('BorderGreen');
        $(control).addClass('BorderRed');
    }
}

//adds green border to control
function AddOKBorder(control, controlType) {
    
    //checkbox list
    if (controlType.indexOf('MultipleChoiceControl') !== -1) {
        $(control).parent().parent().parent().parent().removeClass('BorderRed'); //div
    }

    //radio button list
    if (controlType.indexOf('RadioButtonsControl') !== -1) {
        $(control).parent().parent().parent().parent().removeClass('BorderRed'); //tr
    }

    //all other controls
    if (controlType.indexOf('MultipleChoiceControl') === -1 && controlType.indexOf('RadioButtonsControl')) {
        $(control).removeClass('BorderRed');
        $(control).addClass('BorderGreen');
    }
}

//processes regular expressions
function ProcessRegularExpressions(control, controlConfig, controlType, valueToTest, indexFormControlsDefinitions, errorLabelId) {

    var errorMessagesRegExp = []; //we could have more than 1 regexp --> more than 1 error message possible
        
    //loop through regexps
    for (var i = 0; i < controlConfig.RegularExpressions.length; i++) {

        var regExp = new RegExp(controlConfig.RegularExpressions[i].RegExpTxt);
        var errorMessageRegExp = controlConfig.RegularExpressions[i].ErrorMessage;

        //valid?
        if (!regExp.test(valueToTest)) {
            //add error message to array of error messages
            errorMessagesRegExp.push(errorMessageRegExp);
        } else {
            removeHtmlElement(errorLabelId);
        }
    }

    //errors?
    if (errorMessagesRegExp.length > 0) {
        showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, errorMessagesRegExp.join('</br>'));
        return false;
    }

    return true;
}

//gets value of control
function GetControlValue(control) {
    return $.trim(control.val());
}

//validates spefic data types (e.g. date, integer)
function DoDataTypeValidation(control, dataType, controlCssClass) {
    
    //workaround because we don't want to change text box to date in orignal form. Therefore, we add as Css-Class "DateMarker" to an ordinary text box field
    if (controlCssClass === "DateMarker") {
        dataType = 'date';
    }


    var dataTypeSuccess = {
        'Success':false,
        'ErrorMessage':''
    }
    
    var defaultCulture = formConfig.DefaultCultureIso2; //as "Default content culture" in Site-Settings
    var patternErrorMessage = GetDatePatternsByIso2CountryCode(defaultCulture).RegExpPattern; //for error message date

    switch (dataType) {
        case "date":
            dataTypeSuccess.Success = ValidateDate(control);

            if (!dataTypeSuccess.Success) {
                dataTypeSuccess.ErrorMessage = formConfig.DefaultValidationErrorMessageDate + ' ' + patternErrorMessage;
            }

            break;

        case "integer":
            dataTypeSuccess.Success = ValidateInteger(control);

            if (!dataTypeSuccess.Success) {
                dataTypeSuccess.ErrorMessage = formConfig.DefaultValidationErrorMessageInteger;
            }

            break;

        default:
            dataTypeSuccess.Success = true;
    }

    return dataTypeSuccess;
}

//checks if value of given control is a valid time value (e.g. 17:53 or 05:53 pm)
function ValidateTime(control) {

    var pattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$|\b(([0-1][0-1]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm])$)/;
    var regExp = new RegExp(pattern);
    
    var time = GetControlValue(control);

    //valid?
    if (!regExp.test(time) && time !== '') {
        return false;
    } else {
        return true;
    }
}

//checks if value of given control is a valid date
function ValidateDate(control) {

    var defaultCulture = formConfig.DefaultCultureIso2; //as "Default content culture" in Site-Settings
    var patterns = GetDatePatternsByIso2CountryCode(defaultCulture);
    var regExp = patterns.RegExp;
    
    var date = GetControlValue(control);

    //valid?
    if (regExp.test(date) === false && date !== '') {
        return false;
    } else {
        return true;
    }
}

//checks if value of given control is a valid email compared to default email regexp
function ValidateEmail(control) {
    
    var regExp = new RegExp(formConfig.DefaultRegExpEmail, "g");
    var email = GetControlValue(control);
    
    //valid?
    if (regExp.test(email) === false && email !== '') {
        return false;
    } else {
        return true;
    }
}

//Returns correct pattern (regexp and pattern as text for error message) for given country code (ISO2)
function GetDatePatternsByIso2CountryCode(countryCode) {

    //date formats: https://en.wikipedia.org/wiki/Date_format_by_country
    //country codes ISO2: https://www.iban.com/country-codes

    //regular expressions for different date formats
    var regExpDMY_DOT = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/; //27.12.1962
    var regExpDMY_Slash = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/; //27/12/1962
    var regExpMDY_Slash = /^\s*(1[012]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/((?:19|20)\d{2})\s*$/; //12/27/1962
    var regExpYMD_Dash = /^((?:19|20)\d{2})\s*\-(1[012]|0?[1-9])\-\s*(3[01]|[12][0-9]|0?[1-9])$/; //1962-12-27
    var regExpYMD_Dot = /^((?:19|20)\d{2})\s*\.(1[012]|0?[1-9])\.\s*(3[01]|[12][0-9]|0?[1-9])$/; //1962.12.27

//patterns for error message
    var regExpDMY_DOT_Pattern = 'dd.mm.yyyy'; //27.12.1962
    var regExpDMY_Slash_Pattern = 'dd/mm/yyyy'; //27/12/1962
    var regExpMDY_Slash_Pattern = 'mm/dd/yyyy'; //12/27/1962
    var regExpYMD_Dash_Pattern = 'yyyy-mm-dd'; //1962-12-27
    var regExpYMD_Dot_Pattern = 'yyyy.mm.dd'; //1962.12.27


    var patterns = {

        'RegExp': null,
        'RegExpPattern': ''
    }
    
    //get patterns based on country code
    switch (countryCode) {
        case 'BE':
        case 'DE':
        case 'DK':
        case 'LU':
        case 'PL':

            patterns.RegExp = new RegExp(regExpDMY_DOT); //regular expression to check date, e.g. 27.12.1962
            patterns.RegExpPattern = regExpDMY_DOT_Pattern; //pattern to be attached at the end of the error message (e.g. dd.mm.yyyy)
            break;

        case 'AT':
        case 'AU':
        case 'BR':
        case 'FR':
        case 'IE':
        case 'IT':
        case 'NL':
        case 'NZ':
        case 'SG':
        case 'UK':

            patterns.RegExp = new RegExp(regExpDMY_Slash); //27/12/1962
            patterns.RegExpPattern = regExpDMY_Slash_Pattern;
            break;

        case 'US':

            patterns.RegExp = new RegExp(regExpMDY_Slash); //12/27/1962
            patterns.RegExpPattern = regExpMDY_Slash_Pattern;
            break;

        case 'CA':
        case 'SE':

            patterns.RegExp = new RegExp(regExpYMD_Dash); //1962-12-27
            patterns.RegExpPattern = regExpYMD_Dash_Pattern;
            break;

        case 'HU':

            patterns.RegExp = new RegExp(regExpYMD_Dot); //1962.12.27
            patterns.RegExpPattern = regExpYMD_Dot_Pattern;
            break;
    }

    return patterns;
}

//checks if value of given control is a valid integer
function ValidateInteger(control) {
    
    var isValid = false;
    var controlValue = GetControlValue(control);
    
    if ($.isNumeric(controlValue) && Math.floor(controlValue) == controlValue) {
        isValid = true;
    }
    
    return isValid;
}


//Checks if given control has set a value
function ValidateIsRequired(control, controlType, controlRefs, watermarkText) {

    var isValid = false;
    
    switch (controlType) {
        case 'TextBoxControl':
        case 'emailinput':
        case 'CalendarControl':
                
            var controlValue = GetControlValue(control);
            
            if (controlValue !== '') {

                //if there is a watermark, it is (incorrectly) returned as entered value --> check if value matches watermark to be sure
                if (watermarkText === '') {
                    isValid = true; //no watermark and value entered
                } else {
                    if (controlValue !== watermarkText) {
                        isValid = true; //watermark but different value entered
                    }
                }
            }
            
            break;

        case 'DropDownListControl':
        case 'Sonova_DropDownListControl':

            //we assume, that the first value (call to action) is something like "-- Select --"
            //if first value is selected, user didn't make a choice and therefore control is not selected

            //different approach, where option of call to action has no value
            //var selectedValue = $('#' + controlRefs[0].id + ' option:selected').val();

            //if (selectedValue !== '') {
            //    isValid = true;
            //}
            
            var firstOptionValue = $('#' + controlRefs[0].id + ' option:first')[0].value; //value of first option
            var selectedValue = GetControlValue(control); //value of currently selected option

            if (firstOptionValue !== selectedValue) {
                isValid = true;
            }

            break;

        case 'CheckBoxControl':

            var isChecked = control[0].checked;
            
            if (isChecked) {
                isValid = true;
            }

            break;

        case 'RadioButtonsControl':
        case 'MultipleChoiceControl':
               
            //we have multiple controls, where at least one has to be checked/selected
            for (var i = 0; i < controlRefs.length; i++) {
                
                if (controlRefs[i].checked) {
                    isValid = true;
                    break;
                }
            }
            
            break;
    }

    return isValid;
}


//returns error message text (set directly in Kentico or default text)
function getErrorMessageText(controlConfig, defaultMessage) {

    if (controlConfig.ValidationErrorMessage !== '') {
        return controlConfig.ValidationErrorMessage;
    } else {
        return defaultMessage;
    }
}


//shows error message for given control
function showErrorMessage(control, controlType, indexFormControlsDefinitions, errorLabelId, message) {
    
    var errorHtml = errorHtmlTemplate
        .replace('{0}', errorLabelId)
        .replace('{1}', message);
    
    //does error message already exist
    if (errorMessageExists(errorLabelId) === false) {
        //no --> add

        //do we have a multiple choice or radio button control? If so, we place error message after last control, which means, we have to hand over a different control
        if (controlType.indexOf('MultipleChoiceControl') !== -1 || controlType.indexOf('RadioButtonsControl') !== -1) {

            //get definition of control first (provided by server)
            var controlDefinition = formConfig.FormControlsDefinitions[indexFormControlsDefinitions]; //'indexFormControlsDefinitions' holds the zero-based position of given control within this collection

            //get reference to last checkbox or radio button of the control
            var lastControlId = controlDefinition.ControlRefClientside[controlDefinition.ControlRefClientside.length - 1].id;
            
            //because the checkboxes or radio buttons are wrapped within another element, we select the parent element to place the error message after
            control = $('#' + lastControlId).parent();
        }

        addHtmlElement(control, controlType, errorHtml);

    } else {

        //yes --> update
        $('#' + errorLabelId).html(errorHtml);
    }

    AddErrorBorder(control, controlType);
}

//checks if error message already exists
function errorMessageExists(errorLabelId) {
    return $('#' + errorLabelId).length > 0;
}

//adds html element (html) after given element (jquery object)
function addHtmlElement(element, controlType, htmlElementToAdd) {
    
    if (controlType.indexOf('CheckBoxControl') !== -1) {
        element.parent().after(htmlElementToAdd); //different position (otherwise label would hide checkbox)
    } else {
        element.after(htmlElementToAdd);
    }
}

//removes an element after given element with given id
function removeHtmlElement(elementId) {
    $('#' + elementId).remove();
}


//checks all controls before submit. If at least one fails to validate, submission of form is canceled
function checkAllControlsBeforeSubmit() {
    
    if (formConfig.ActivateInlineValidation === false || triggeredByForm === false) { //inline validation is not activated or hasn't been triggered by form (but by search and ? instead)
        return true;
    }

    var errorLabelCount = $('.InlineValidationError').length;

    var failCount = 0; //local counter for anything else than async requests (loqate service - email and phone)

    try {

        //is inline validation enabled but are we on a page without a form (but with a search field for example, where submit button triggers this validation)?
        if (typeof formConfig.FormControlsDefinitions === 'undefined') {
            return true; //return true to not break the functionality
        }

        for (var i = 0; i < formConfig.FormControlsDefinitions.length; i++) {

            if (formConfig.FormControlsDefinitions[i].ValidationRequired) {

                var control = $(formConfig.FormControlsDefinitions[i].SelectorText);

                if (control !== null) { //alternative form not holding this specific control may be used. Our definitions of controls are from main form

                    var success = validateControl(control);

                    if (!success) {
                        failCount += 1;
                    }
                }
            }
        }

        if (formConfig.ShowDebugOutput) {
            console.log(failCount);
        }

        if (failCount > 0 || errorLabelCount > 0) {

            if (formConfig.ShowDebugOutput) {
                console.log('Found errors. Canceling Submission now');
            }
            
            return false;
        } else {

            ModifiySendButtion();

            if (formConfig.ShowDebugOutput) {
                console.log('No errors. Submitting now');
            }
            
            return true;
            //return WebForm_OnSubmit();
        }
        
    } catch (e) {

        console.log('++++++++++++++++++++++++ checkAllControlsBeforeSubmit: ERROR ++++++++++++++++++++++');
        console.log(e);

        return false;
    }
}

//Modifies Send-Button to give feedback to user, that form is submitted now
function ModifiySendButtion() {
    
    //this has partialy been copied from /CMS/CMSScripts/Sonova/FormControls/sx.formbutton.js, which has been disabled now
    
    var $submitBtn = $('div.sx-form input.FormButton');
    $submitBtn.addClass("btn-disabled");
    $submitBtn.attr("value", RS.formSending);
}


var triggeredByForm = false; //indicates if submit has been triggered by form (true) or by search + ? (false)

//initialization code
//gets form config from server
//adds event handlers to controls
$(document).ready(function() {

    //because search field and form fields are within the same form, we have to distinguish who triggered the submit
    //if we don't search will trigger inline validation if there is a form on the page. Therefore search request will not be submitted in most cases
    //therefore, we have to set a flag (variable "triggeredByForm"), which will indicate if submission has been started by the form or the search
    //if the variable "triggeredByForm" is set to true, the submission has been triggered by the form's submit button and therefore we do a validation
    //if the value is set to false, we skip inline validation and therefore form can be submitted anyway, which then will trigger code for search


    //the submit button generated by the form engine is located within a span which has the class "FormButtonWrapper" assigned
    //add a click event which sets the flag that indicates, that the form was submitted by the form's submit button (and not the search)
    $(".FormButtonWrapper").find('input[type="submit"]').click(function () {
        triggeredByForm = true;
    });
    
    //hijack submit event of form (we have to do client-side validation before form should be submitted)
    //use this if you do NOT wrap the forms into a form wrapper. Otherwise function in sx.formbutton.js will handle submit
    $('#form').submit(function() {
        return checkAllControlsBeforeSubmit();
    });
    
    var formName = $('#RequestedFormName').val();
    
    //is there a form on requested page?
    if (typeof(formName) != 'undefined') {

        //get data of requested form
        $.ajax({
            type: "POST",
            url: "/CMSPages/Sonova/InlineValidationHandler.ashx",
            data: '{"formName":"' + formName + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data, status, jqXHR) {

                formConfig = data; //store received form config 

                if (formConfig.ShowDebugOutput) {
                    console.log(formConfig);
                }
                

                //is inline validation disabled for site?
                if (formConfig.ActivateInlineValidation === false) {
                    return;
                }
                
                //was there an error?
                if (formConfig.ErrorMessage !== '') {
                    alert(formConfig.ErrorMessage); 
                } else {

                    //loop through all (public) form controls in form definition
                    for (var i = 0; i < formConfig.FormControlsDefinitions.length; i++) {

                        //validation required?
                        if (formConfig.FormControlsDefinitions[i].ValidationRequired === true) {

                            //try to find form control(s) (which has another, automatically created id)
                            //in case of radio button or check box lists, there will be at least one control (or more)
                            var selectorTxt = ''; //text (jquery selector) to find control within DOM
                            var getControlReference = false;
                            var multipleControls = false; //radio buttons and check box lists if >= 1 item to check
                            var controlType = formConfig.FormControlsDefinitions[i].ControlType;

                            //create jquery selector based on given control type
                            switch (controlType) {
                                case 'TextBoxControl':
                                case 'emailinput':
                                case 'CalendarControl':
                                case 'CheckBoxControl':
                                case 'HTML5Input':

                                    getControlReference = true;

                                    if (controlType === 'TextBoxControl') {
                                        //if there is a watermark configured, Kentico add an additional field which is found as well --> validation breaks
                                        selectorTxt = 'input[id*="_' + formConfig.FormControlsDefinitions[i].ControlId + '_txt"]';
                                    } else {
                                        selectorTxt = 'input[id*="_' + formConfig.FormControlsDefinitions[i].ControlId + '_"]';
                                    }
                                    
                                    break;

                                case 'DropDownListControl':
                                case 'Sonova_DropDownListControl':
                                    getControlReference = true;
                                    selectorTxt = 'select[id*="_' + formConfig.FormControlsDefinitions[i].ControlId + '_"]';
                                    break;

                                case 'RadioButtonsControl':
                                case 'MultipleChoiceControl':
                                    getControlReference = true;
                                    multipleControls = true;
                                    selectorTxt =
                                        'input[id*="_' + formConfig.FormControlsDefinitions[i].ControlId + '_list_"]';
                                    break;
                            }

                            if (getControlReference === true) {

                                //get control
                                var foundControl = $(selectorTxt);
                                
                                //store reference(s) to control(s)
                                //for controls other than radio button and check box list, we want exactly 1 match
                                if ((multipleControls === false && foundControl.length === 1) ||
                                    multipleControls === true) {

                                    //add change event handler (which will do the validation)
                                    switch (controlType) {
                                        case 'TextBoxControl':
                                        case 'emailinput':
                                        case 'CalendarControl':
                                        case 'HTML5Input':
                                        case 'DropDownListControl':
                                        case 'Sonova_DropDownListControl':

                                            foundControl.attr('data-control-index', i);

                                            //add blur event handler which will trigger validation
                                            foundControl.blur(function() {
                                                validateControl($(this)); //hand over found control (as jQuery object)
                                            });

                                            break;

                                        case 'CheckBoxControl':
                                        case 'MultipleChoiceControl':
                                        case 'RadioButtonsControl':

                                            foundControl.attr('data-control-index', i);

                                            //add click event handler which will trigger validation
                                            foundControl.click(function() {
                                                validateControl($(this)); //hand over found control (as jQuery object)
                                            });

                                            break;
                                    }

                                    //add jQuery selector text so that we can select control(s) easy
                                    formConfig.FormControlsDefinitions[i].SelectorText = selectorTxt;

                                    //add ref(s) to found control(s) (therefore, we do not have to do a lookup each and every time)
                                    formConfig.FormControlsDefinitions[i].ControlRefClientside = foundControl;
                                }
                                
                            } else {

                                //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Form control id is: ' + formConfig.FormControlsDefinitions[i].ControlId);
                            }

                        }
                    }
                }
            },

            error: function(jqXHR, status) {

                // error handler
                console.log(jqXHR.responseText);
                alert('fail' + status.code);
            }
        });
    }
    
});