Downloading
-----------

   URL: https://sourceforge.net/projects/opengrads/files/grads2/

   On Linux, select binaries based on your glibc version. 
   To find out your glibc version, enter onnthe command line:  

                        ldd --version

   Select the newest glibc version that is less or equal the
   version you have installed on your system. For example,
   if your system has glibc 2.17 you can install any version
   less than 2.17 (say, 2.12) but not 2.18.

Installation
------------

   For binary installation information see file INSTALL.
   For instructions on building from sources consult file BUILD 

Overview of GrADS
-----------------

The Grid Analysis and Display System (GrADS) is an interactive desktop
tool that is used for easy access, manipulation, and visualization of
earth science data. GrADS has two data models for handling gridded and
station data. GrADS supports many data file formats, including binary
(stream or sequential), GRIB (version 1 and 2), NetCDF, HDF (version 4
and 5), and BUFR (for station data). GrADS has been implemented
worldwide on a variety of commonly used operating systems and is
freely distributed over the Internet.

GrADS uses a 5-Dimensional data environment: the four conventional
dimensions (longitude, latitude, vertical level, and time) plus an
optional 5th dimension for grids that is generally implemented but
designed to be used for ensembles. Data sets are placed within the 5-D
space by use of a data descriptor file. GrADS handles grids that are
regular, non-linearly spaced, gaussian, or of variable
resolution. Data from different data sets may be graphically overlaid,
with correct spatial and time registration. Operations are executed
interactively by entering FORTRAN-like expressions at the command
line. A rich set of built-in functions are provided, but users may
also add their own functions as external routines written in any
programming language.

Data may be displayed using a variety of graphical techniques: line
and bar graphs, scatter plots, smoothed contours, shaded contours,
streamlines, wind vectors, grid boxes, shaded grid boxes, and station
model plots. Graphics may be output in PostScript or image
formats. GrADS provides geophysically intuitive defaults, but the user
has the option to control all aspects of graphics output.

GrADS has a programmable interface (scripting language) that allows
for sophisticated analysis and display applications. Use scripts to
display buttons and dropmenus as well as graphics, and then take
action based on user point-and-clicks. GrADS can be run in batch mode,
and the scripting language facilitates using GrADS to do long
overnight batch jobs.

What is OpenGrADS?
------------------

The OpenGrADS Project seeks to develop advanced interfaces and
extensions based on the main GrADS engine.  The OpenGrADS Project aims
at improving GrADS extensibility by

* developing a framework for high performance user defined commands
  and user defined functions, allowing users to add their own
  dynamically linked plugins;

* developing interfaces to modern scripting languages such as Perl and
  Python, as as well as to scientific tools such as IDL, Octave and
  Matlab, so that more powerful GrADS based applications can be
  developed and integrated into other existing community efforts;

* establishing a central location for collaborative development of
  packages for GrADS, coordinating the development of extensions in
  critical areas;

* providing a central repository of such extensions for the end-user.

The OpenGrADS Project intends to complement the GrADS development
going on at COLA/GMU, although from time to time patches to COLA
releases will be necessary to enable the latest OpenGrADS extensions.


Additional Information
----------------------

   Consult the GrADS website: http://cola.gmu.edu/grads/grads.php

   For information on OpenGrADS extensions and interfaces to Perl and 
   Python consult the OpenGrADS wesite:  http://opengrads.org/
 
