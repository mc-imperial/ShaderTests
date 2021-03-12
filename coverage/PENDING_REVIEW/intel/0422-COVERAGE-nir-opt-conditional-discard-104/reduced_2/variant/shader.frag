#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 int GLF_live7_looplimiter31 = 1;
 for(int GLF_live7c = 1; GLF_live7c < 4; GLF_live7c ++)
  {
   if(GLF_live7_looplimiter31 >= 4)
    {
     break;
    }
   GLF_live7_looplimiter31 ++;
   if(injectionSwitch.x > 1.0)
    {
     discard;
    }
  }
}
