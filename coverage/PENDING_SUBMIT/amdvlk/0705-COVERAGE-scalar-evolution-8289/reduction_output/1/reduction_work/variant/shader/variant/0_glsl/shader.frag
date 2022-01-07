#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1
layout(push_constant) uniform buf_push {
 int one;
};
void main()
{
 float f = 1.0;
 if(one > 0)
  {
   int a = 1;
   for(int i = 0; i < 120; i ++)
    {
     a *= one;
    }
   f = float(a);
  }
 f = max(f, 1.0);
 if(f == 1.0)
  _GLF_color = vec4(1, 0, 0, 1);
 else
  _GLF_color = vec4(0);
}
