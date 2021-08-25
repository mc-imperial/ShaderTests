#version 320 es

precision highp int;

precision highp float;

float GLF_live2h_r = 1.0;

precision highp float;

precision highp int;

void main()
{
 bool GLF_live2computeColor_has_returned = true;
 GLF_live2computeColor_has_returned = false;
 if(bitfieldExtract(1, 1, 1) == 1)
  {
  }
 else
  {
   GLF_live2computeColor_has_returned = true;
  }
 if(GLF_live2computeColor_has_returned)
  {
   vec3(max(1.0, GLF_live2h_r), 1.0, 1.0);
  }
}
