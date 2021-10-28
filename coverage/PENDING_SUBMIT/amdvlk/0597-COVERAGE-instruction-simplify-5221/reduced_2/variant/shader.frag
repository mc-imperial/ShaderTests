#version 320 es

precision highp int;

precision highp float;

// Contents of GLF_dead7resolution: [0.6505278, 0.5265224]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_dead7resolution;
};
precision highp float;

precision highp int;

void main()
{
 for(int i = 1; i < 9; i ++)
  {
   for(int j = 1; j < 10; j ++)
    {
     if(1 < i)
      {
       continue;
      }
     if((vec2(1.0) / GLF_dead7resolution.x).y < 1.0)
      {
       return;
      }
    }
  }
}
