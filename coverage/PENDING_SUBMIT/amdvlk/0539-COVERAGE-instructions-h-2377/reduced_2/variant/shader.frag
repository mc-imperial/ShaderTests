#version 320 es

precision highp float;

precision highp int;

struct _GLF_struct_33 {
 int GLF_live4j;
} ;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int GLF_live4_looplimiter4 = 1;
 for(_GLF_struct_33 _GLF_struct_replacement_33 = _GLF_struct_33(1); _GLF_struct_replacement_33.GLF_live4j < 1; _GLF_struct_replacement_33.GLF_live4j ++)
  {
   if(GLF_live4_looplimiter4 >= 4)
    {
     break;
    }
   GLF_live4_looplimiter4 ++;
   _GLF_color = vec4(1.0);
  }
}
