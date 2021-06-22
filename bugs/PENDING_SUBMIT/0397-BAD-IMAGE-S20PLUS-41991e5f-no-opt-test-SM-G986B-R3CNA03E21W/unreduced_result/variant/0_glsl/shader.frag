#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp int;

precision highp float;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
mediump vec4 GLF_live13gl_FragCoord = _GLF_FUZZED((+ (vec4(-77.63, 3.4, -6.5, -7310.6069) - vec4(1.1, -49.41, 1.2, 9008.5223))));

vec4 GLF_live13_GLF_color = _GLF_FUZZED((mat4(-5.9, 3.2, 6.0, -9.2, -47.39, 8.6, 9.4, -6494.5381, -0.7, -97.00, 565.133, 90.97, 4.9, -4359.0839, 8308.8607, -1790.3146) * vec4(-718.992, -7.5, -278.415, -0.9)));

precision highp float;

precision highp int;

mediump vec4 GLF_live12gl_FragCoord = _GLF_FUZZED((- vec4(-7.8, -9150.7486, -0.1, -7153.9815)));

const int GLF_live12N = 10;

int GLF_live12data[10] = _GLF_FUZZED(int[10](40490, GLF_live12N, 56499, -76120, GLF_live12N, GLF_live12N, GLF_live12N, (ivec4(31414, 59465, -54656, 88919) - -87109).p, GLF_live12N, -57388)), GLF_live12temp[10] = _GLF_FUZZED(int[10](-88929, GLF_live12N, (GLF_live12N + 21748), (GLF_live12N << GLF_live12N), 21460, -431, 6174, -54338, int(-894.140), ivec4(41367, 89527, -96083, -42110).y));

precision highp float;

precision highp int;

mediump vec4 GLF_live15gl_FragCoord = _GLF_FUZZED((vec4(1.2, vec2(-8.8, -5123.4950), 6.4) - -9.1));

vec4 GLF_live15_GLF_color = _GLF_FUZZED(vec4(-753.822, 1684.3170, 0.2, -64.58));

layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_live15resolution;
};
const vec4 GLF_live15pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), vec4(0.5, 0.0, 0.0, 1.0), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0));

ivec2 GLF_live15iter(ivec2 GLF_live15p)
{
 if(GLF_live15p.x > 0)
  {
   GLF_live15p.y --;
  }
 if(GLF_live15p.x < 0)
  {
   GLF_live15p.y ++;
  }
 GLF_live15p.x += GLF_live15p.y / 2;
 return GLF_live15p;
 if(_GLF_DEAD(false))
  return ivec2(1);
}
precision highp float;

mediump vec4 GLF_live14gl_FragCoord = _GLF_FUZZED((vec4(8.6, 7184.9712, 215.281, -3.1) * vec4(-5282.8170, -4539.5995, 79.80, 2.2)));

vec4 GLF_live14_GLF_color = _GLF_FUZZED(vec4(5156.6284, -241.700, -6.5, -77.47));

layout(set = 0, binding = 2) uniform sampler2D GLF_live14tex;

float GLF_live14ReallyApproxNormalizedAtan2(vec2 GLF_live14v)
{
 float GLF_live14pi2 = 1.0 / (355.0 / 113.0);
 if(length(GLF_live14v) < 0.001)
  {
   return 0.0;
  }
 vec2 GLF_live14a = abs(GLF_live14v);
 float GLF_live14z = _GLF_FUZZED(-307.112);
 if(GLF_live14a.y > GLF_live14a.x)
  {
   GLF_live14z = GLF_live14a.x / GLF_live14a.y;
  }
 else
  {
   GLF_live14z = GLF_live14a.y / GLF_live14a.x;
  }
 float GLF_live14th = (0.97 - 0.19 * GLF_live14z * GLF_live14z) * GLF_live14z * GLF_live14pi2;
 do
  {
   if(GLF_live14a.y < GLF_live14a.x)
    {
     GLF_live14th = 0.5 - GLF_live14th;
    }
  }
 while(_GLF_WRAPPED_LOOP(false));
 if(_GLF_DEAD(false))
  return 1.0;
 if(GLF_live14v.x < 0.0)
  {
   GLF_live14th = 1.0 - GLF_live14th;
  }
 if(GLF_live14v.y < 0.0)
  {
   GLF_live14th = - GLF_live14th;
  }
 return GLF_live14th;
}
vec2 GLF_live14polarize(vec2 GLF_live14coord)
{
 float GLF_live14pi = (355.0 / 113.0);
 vec2 GLF_live14center = GLF_live14coord - vec2(0.5);
 float GLF_live14dist = length(GLF_live14center);
 float GLF_live14angle = GLF_live14ReallyApproxNormalizedAtan2(GLF_live14center);
 do
  {
   return vec2(GLF_live14dist, GLF_live14angle);
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
}
precision highp float;

precision highp int;

vec4 GLF_live10_GLF_color = _GLF_FUZZED(vec4(-7808.8434, -1.6, 952.554, -340.378));

struct GLF_live10BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live10BST GLF_live10tree[10] = _GLF_FUZZED(GLF_live10BST[10](GLF_live10BST(-2014, -65686, 16853), GLF_live10BST(90395, 71134, 20746), GLF_live10BST(-99044, 10685, 11671), GLF_live10BST(-31357, -96161, -55186), GLF_live10BST(-75106, -36865, 46811), GLF_live10BST(-85281, -30110, 54746), GLF_live10BST(-27417, -42299, -1307), GLF_live10BST(66465, -28356, -24481), GLF_live10BST(-79666, 35522, -8090), GLF_live10BST(-27417, -42299, -1307)));

void GLF_live10makeTreeNode(inout GLF_live10BST GLF_live10tree, int GLF_live10data)
{
 GLF_live10tree.data = GLF_live10data;
 GLF_live10tree.leftIndex = - _GLF_IDENTITY(1, _GLF_IDENTITY(int(ivec3(_GLF_IDENTITY(1, (1) * 1), 0, 1)), min(int(ivec3(_GLF_IDENTITY(1, (1) * 1), 0, 1)), int(ivec3(_GLF_IDENTITY(1, (1) * 1), 0, 1)))));
 _GLF_IDENTITY(GLF_live10tree.rightIndex = - 1, ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(GLF_live10tree.rightIndex = - 1, ~ (~ (GLF_live10tree.rightIndex = - 1)))), (~ (_GLF_IDENTITY(GLF_live10tree.rightIndex = - 1, ~ (~ (GLF_live10tree.rightIndex = - 1))))) ^ 0)));
}
void GLF_live10insert(int GLF_live10treeIndex, int GLF_live10data)
{
 int GLF_live10baseIndex = 0;
 {
  int GLF_live10_looplimiter0 = 0;
  for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
   {
    float GLF_live12grey = _GLF_FUZZED(582.594);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     return;
    {
     GLF_live12grey = 0.5 + float(GLF_live12data[8]) / 10.0;
    }
   }
  while(GLF_live10baseIndex <= GLF_live10treeIndex)
   {
    if(GLF_live10_looplimiter0 >= 5)
     {
      break;
     }
    GLF_live10_looplimiter0 ++;
    if(GLF_live10data <= GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, 10)].data)
     {
      if(GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, _GLF_IDENTITY(10, (10) * (((1 | 0) << _GLF_IDENTITY(int(3), _GLF_IDENTITY(int(3), ~ (~ (int(3)))))) >> _GLF_IDENTITY(int(3), int(3)))))].leftIndex == - 1)
       {
        GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, 10)].leftIndex = GLF_live10treeIndex;
        GLF_live10makeTreeNode(GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10treeIndex, 10)], GLF_live10data);
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
           {
            discard;
           }
         }
        for(int _injected_loop_counter = (1 | 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
         {
          return;
         }
       }
      else
       {
        GLF_live10baseIndex = GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, 10)].leftIndex;
        continue;
       }
     }
    else
     {
      if(GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, _GLF_IDENTITY(10, (_GLF_IDENTITY(10, (true ? _GLF_IDENTITY(10, (10) * 1) : _GLF_FUZZED(GLF_live10treeIndex)))) / 1))].rightIndex == - 1)
       {
        if(_GLF_DEAD(false))
         continue;
        GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, 10)].rightIndex = GLF_live10treeIndex;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         discard;
        GLF_live10makeTreeNode(GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10treeIndex, 10)], GLF_live10data);
        return;
       }
      else
       {
        GLF_live10baseIndex = GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10baseIndex, 10)].rightIndex;
        if(_GLF_DEAD(false))
         {
          do
           {
            return;
           }
          while(_GLF_WRAPPED_LOOP(false));
         }
        continue;
       }
     }
   }
 }
}
int GLF_live10search(int GLF_live10target)
{
 GLF_live10BST GLF_live10currentNode = _GLF_FUZZED(GLF_live10BST(63019, -47082, findLSB(69464u)));
 int GLF_live10index = 0;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1;
 {
  int GLF_live10_looplimiter1 = 0;
  if(_GLF_WRAPPED_IF_FALSE(false))
   {
   }
  else
   {
    while(GLF_live10index != - 1)
     {
      if(GLF_live10_looplimiter1 >= 5)
       {
        break;
       }
      GLF_live10_looplimiter1 ++;
      GLF_live10currentNode = GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10index, 10)];
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        vec2 GLF_live13coord = _GLF_FUZZED(vec2(float(78591)));
        {
         ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
         int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
         int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
         int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
          }
         else
          {
           GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
          }
        }
       }
      else
       {
       }
      if(GLF_live10currentNode.data == GLF_live10target)
       {
        return GLF_live10target;
       }
      GLF_live10index = GLF_live10target > GLF_live10currentNode.data ? GLF_live10currentNode.rightIndex : GLF_live10currentNode.leftIndex;
      {
       {
        vec2 GLF_live14coord = GLF_live14gl_FragCoord.xy * (1.0 / 256.0);
        vec2 GLF_live14coord1 = GLF_live14polarize(GLF_live14coord + vec2(20.0 / 256.0, - 80.0 / 256.0));
        if(_GLF_DEAD(false))
         break;
        vec2 GLF_live14coord2 = GLF_live14polarize(GLF_live14coord + vec2(- 60.0 / 256.0, 40.0 / 256.0));
        vec2 GLF_live14coord3 = GLF_live14polarize(GLF_live14coord);
        GLF_live14coord = GLF_live14coord1 - GLF_live14coord2 + GLF_live14coord3;
        if(_GLF_DEAD(false))
         break;
        GLF_live14coord = floor(GLF_live14coord * 256.0) / 256.0;
        GLF_live14_GLF_color = vec4(texture(GLF_live14tex, GLF_live14coord).xyz, 1.0);
       }
      }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       return 1;
     }
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
  return 1;
 return - 1;
}
precision highp float;

precision highp int;

precision highp float;

mediump vec4 GLF_live11gl_FragCoord = _GLF_FUZZED(_GLF_IDENTITY((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37), _GLF_IDENTITY(vec4(mat3x2(_GLF_IDENTITY((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37), mix(vec4(_GLF_FUZZED(1471.8645), _GLF_FUZZED((7747.3734 * 3.3)), _GLF_FUZZED(-0.7), ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[3]), vec4(((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[0], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[1], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[2], _GLF_FUZZED(3957.8417)), bvec4(true, true, true, false))), 1.0, 0.0)), mix(vec4(_GLF_FUZZED(-1.5), (vec4(mat3x2(_GLF_IDENTITY((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37), mix(vec4(_GLF_FUZZED(1471.8645), _GLF_FUZZED((7747.3734 * 3.3)), _GLF_FUZZED(-0.7), ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[3]), vec4(((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[0], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[1], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[2], _GLF_FUZZED(3957.8417)), bvec4(true, true, true, false))), 1.0, 0.0)))[1], (vec4(mat3x2(_GLF_IDENTITY((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37), mix(vec4(_GLF_FUZZED(1471.8645), _GLF_FUZZED((7747.3734 * 3.3)), _GLF_FUZZED(-0.7), ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[3]), vec4(((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[0], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[1], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[2], _GLF_FUZZED(3957.8417)), bvec4(true, true, true, false))), 1.0, 0.0)))[2], (vec4(mat3x2(_GLF_IDENTITY((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37), mix(vec4(_GLF_FUZZED(1471.8645), _GLF_FUZZED((7747.3734 * 3.3)), _GLF_FUZZED(-0.7), ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[3]), vec4(((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[0], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[1], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[2], _GLF_FUZZED(3957.8417)), bvec4(true, true, true, false))), 1.0, 0.0)))[3]), vec4((vec4(mat3x2(_GLF_IDENTITY((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37), mix(vec4(_GLF_FUZZED(1471.8645), _GLF_FUZZED((7747.3734 * 3.3)), _GLF_FUZZED(-0.7), ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[3]), vec4(((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[0], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[1], ((vec4(5459.0375, 5468.1047, 8.7, 6.3) + -14.37))[2], _GLF_FUZZED(3957.8417)), bvec4(true, true, true, false))), 1.0, 0.0)))[0], _GLF_FUZZED(-7781.3537), _GLF_FUZZED(7.3), _GLF_FUZZED(546.182)), bvec4(true, false, false, false)))));

vec4 GLF_live11_GLF_color = _GLF_FUZZED(vec3(-3367.6087, -142.803, -357.502).ssts);

layout(set = 0, binding = 3) uniform sampler2D GLF_live11tex;

precision highp float;

layout(set = 0, binding = 4) uniform sampler2D GLF_live8tex;

precision highp float;

precision highp int;

mediump vec4 GLF_live7gl_FragCoord = _GLF_FUZZED((mat3x4(-6.2, -0.8, 4910.3317, _GLF_IDENTITY(-886.550, (_GLF_IDENTITY(_GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))), clamp(_GLF_IDENTITY(_GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))), max(_GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))), _GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))))), _GLF_IDENTITY(_GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))), _GLF_IDENTITY(float(vec3(_GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))), 1.0, 1.0)), mix(float(float(vec3(_GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true))), 1.0, 1.0))), float(_GLF_FUZZED(-3.9)), bool(false)))), _GLF_IDENTITY(-886.550, mix(float(_GLF_FUZZED(5870.3116)), float(-886.550), bool(true)))))) / 1.0), 5983.1719, -3.3, -8500.0119, 0.8, 46.52, 3.4, -125.061, -68.31) * vec3(-426.188, -6.1, -1.5)));

layout(set = 0, binding = 5) uniform buf5 {
 vec2 GLF_live7resolution;
};
bool GLF_live7checkSwap(float GLF_live7a, float GLF_live7b)
{
 for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
  {
   return GLF_live7gl_FragCoord.y < GLF_live7resolution.y / 2.0 ? GLF_live7a > GLF_live7b : GLF_live7a < GLF_live7b;
  }
}
precision highp float;

precision highp float;

precision highp float;

precision highp int;

precision highp float;

precision highp int;

precision highp float;

precision highp int;

precision highp float;

layout(set = 0, binding = 6) uniform sampler2D GLF_live1tex;

const float GLF_live1weights[9] = float[9](1.0, 0.5, - 0.25, 0.5, 1.0, - 0.5, - 0.25, - 0.5, - 1.0);

precision highp float;

layout(set = 0, binding = 7) uniform sampler2D GLF_live3tex;

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 8) uniform buf8 {
 vec2 resolution;
};
float compute_value(float limit, float thirty_two)
{
 float result = - 0.5;
 if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.x < 0.0))) && true)))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return 1.0;
   return 1.0;
  }
 do
  {
   if(_GLF_DEAD(false))
    {
     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
      {
       return 1.0;
      }
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
  }
 else
  {
   do
    {
     if(_GLF_DEAD(false))
      {
       do
        {
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 ^ 0)); _injected_loop_counter --)
          {
           if(_GLF_DEAD(false))
            break;
           return 1.0;
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
    {
    }
   else
    {
     int GLF_live8i = _GLF_FUZZED(-92672);
     float GLF_live8h = _GLF_FUZZED(_GLF_IDENTITY((vec2(-27.81, -8997.3820) * 34.87).g, 1.0 * ((vec2(-27.81, -8997.3820) * 34.87).g)));
     float GLF_live8slope = _GLF_FUZZED(-59.76);
     {
      if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
       }
      else
       {
        vec2 GLF_live15pos = GLF_live15gl_FragCoord.xy / GLF_live15resolution;
        ivec2 GLF_live15ipos = ivec2(int(GLF_live15pos.x * 8.0), int(GLF_live15pos.y * 8.0));
        int GLF_live15v = (GLF_live15ipos.x & 5) | (GLF_live15ipos.y & 10);
        int GLF_live15w = (GLF_live15ipos.y & 5) | (GLF_live15ipos.x & 10);
        ivec2 GLF_live15p = ivec2(GLF_live15v * 8 + GLF_live15w, 0);
        int GLF_live15i = _GLF_FUZZED(GLF_live15w);
        {
         int GLF_live15_looplimiter0 = 0;
         if(_GLF_DEAD(false))
          return 1.0;
         for(         GLF_live15i = 0;
 GLF_live15i < 100; GLF_live15i ++)
          {
           if(GLF_live15_looplimiter0 >= 6)
            {
             break;
            }
           do
            {
             GLF_live15_looplimiter0 ++;
            }
           while(_GLF_WRAPPED_LOOP(false));
           GLF_live15p = GLF_live15iter(GLF_live15p);
          }
        }
        if(GLF_live15p.x < 0)
         {
          GLF_live15p.x = - GLF_live15p.x;
         }
        if(_GLF_DEAD(false))
         return 1.0;
        {
         int GLF_live15_looplimiter1 = 0;
         while(GLF_live15p.x > 15)
          {
           if(_GLF_DEAD(false))
            discard;
           if(GLF_live15_looplimiter1 >= 6)
            {
             break;
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              break;
            }
           GLF_live15_looplimiter1 ++;
           GLF_live15p.x -= 16;
          }
        }
        GLF_live15_GLF_color = GLF_live15pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15p.x, 16)];
       }
     }
     float GLF_live8refh = _GLF_FUZZED(-1706.7692);
     vec2 GLF_live8coord = _GLF_FUZZED((vec2(_GLF_IDENTITY(405.970, _GLF_IDENTITY(float(float(405.970)), max(_GLF_IDENTITY(float(float(405.970)), clamp(float(float(405.970)), float(float(405.970)), float(float(405.970)))), _GLF_IDENTITY(float(float(405.970)), float(vec2(float(float(405.970)), 1.0)))))), -5613.5360) + vec2(116.836, -432.915).t));
     vec2 GLF_live8uvstep = _GLF_FUZZED(vec2(-224.250, 15.56));
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(4959.4511, -134.977, -3.1, -0.9);
        if(_GLF_DEAD(false))
         {
          _GLF_color = mix(vec4(5.1, 2281.9722, 2502.9437, 2.9), vec4(8.7, 702.719, 7.0, 4.2), sign(length(-8352.8690)));
         }
        if(_GLF_DEAD(false))
         return 1.0;
       }
      int GLF_live8_looplimiter0 = 0;
      while(GLF_live8h < GLF_live8refh && GLF_live8i < 32)
       {
        if(GLF_live8_looplimiter0 >= 4)
         {
          break;
         }
        GLF_live8_looplimiter0 ++;
        GLF_live8coord -= GLF_live8uvstep;
        GLF_live8refh += GLF_live8slope;
        GLF_live8h = texture(GLF_live8tex, GLF_live8coord).y;
        GLF_live8i ++;
       }
     }
    }
   for(int i = _GLF_IDENTITY(1, (_GLF_IDENTITY(1, (1) << 0)) - 0); i < 800; i ++)
    {
     if(_GLF_IDENTITY((i % 32), (false ? _GLF_FUZZED((-51058 * 76339)) : (i % 32))) == 0)
      {
       {
        vec2 GLF_live4b = _GLF_FUZZED(vec2(-5385.3111, 1709.9825));
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         return 1.0;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(_GLF_IDENTITY(dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0)), dot(vec3(1.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0))))))))
         continue;
        vec2 GLF_live4a = _GLF_FUZZED(((_GLF_IDENTITY(_GLF_IDENTITY(+ (vec2(-9.7, 22.04) * mat2(90.33, 4.0, -91.63, -7.3)), max(+ (vec2(-9.7, 22.04) * mat2(90.33, 4.0, -91.63, -7.3)), + (vec2(-9.7, 22.04) * mat2(90.33, 4.0, -91.63, -7.3)))), (+ (vec2(-9.7, 22.04) * mat2(90.33, 4.0, -91.63, -7.3))) - vec2(0.0, 0.0)))));
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(_GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, 0.0 + (_GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED((-7791.4413))), float(1.0), bool(true)))))), vec4(0.0, 1.0, 0.0, 0.0)), (dot(vec4(1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, 0.0 + (_GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED((-7791.4413))), float(1.0), bool(true)))))), vec4(0.0, 1.0, 0.0, 0.0))) + 0.0), _GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 0.0, 0.0)), float(vec4(dot(vec4(1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, 0.0 + (1.0))), vec4(0.0, 1.0, 0.0, 0.0)), 0.0, _GLF_IDENTITY(1.0, _GLF_IDENTITY(float(vec4(1.0, abs(1.0), 0.0, 0.0)), _GLF_IDENTITY(float(_GLF_IDENTITY(mat2x3(float(vec4(1.0, abs(1.0), 0.0, 0.0)), _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(vec4(1.0, 0.0, 0.0, 0.0), _GLF_IDENTITY(vec4(1.0, 0.0, 0.0, 0.0), (_GLF_IDENTITY(vec4(1.0, 0.0, 0.0, 0.0), mix(vec4(_GLF_FUZZED(0.7), (vec4(1.0, 0.0, 0.0, 0.0))[1], _GLF_FUZZED(7537.5533), (vec4(1.0, 0.0, 0.0, 0.0))[3]), vec4((vec4(1.0, 0.0, 0.0, 0.0))[0], _GLF_FUZZED(-7295.8943), (vec4(1.0, 0.0, 0.0, 0.0))[2], _GLF_FUZZED(-9166.4446)), bvec4(true, false, true, false)))) / vec4(1.0, 1.0, 1.0, 1.0)))), 1.0, 0.0, 0.0, 1.0), mat2x3(mat2x4(mat2x3(float(vec4(1.0, abs(1.0), 0.0, 0.0)), _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, 0.0, 0.0))), 1.0, 0.0, 0.0, 1.0))))), mix(float(_GLF_FUZZED(-5.0)), float(float(_GLF_IDENTITY(mat2x3(float(vec4(1.0, abs(1.0), 0.0, 0.0)), _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, 0.0, 0.0))), 1.0, 0.0, 0.0, 1.0), mat2x3(mat2x4(mat2x3(float(vec4(1.0, abs(1.0), 0.0, 0.0)), _GLF_IDENTITY(dot(vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(mat4(_GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)), 1.0, 0.0, exp(0.0), 0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 1.0, _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, sqrt(0.0), 0.0)), dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, sqrt(0.0), 0.0))), cos(0.0), 1.0, 1.0, 0.0, 0.0, 1.0, sin(0.0))), mix(float(float(mat4(_GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)), 1.0, 0.0, exp(0.0), 0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 1.0, _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, sqrt(0.0), 0.0)), dot(vec4(1.0, 0.0, 0.0, 0.0), vec4(1.0, 0.0, sqrt(0.0), 0.0))), cos(0.0), 1.0, 1.0, 0.0, 0.0, 1.0, sin(0.0)))), float(_GLF_FUZZED(-2661.3373)), bool(false)))), 0.0, 0.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(vec4(1.0, 0.0, 0.0, 0.0), _GLF_IDENTITY(vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0)), mix(float(_GLF_FUZZED(3095.9311)), float(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0))), bool(true)))), 0.0, 0.0), mix(vec4(_GLF_FUZZED(-801.474), _GLF_FUZZED(4.6), (vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0)), mix(float(_GLF_FUZZED(3095.9311)), float(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0))), bool(true)))), 0.0, 0.0))[2], _GLF_FUZZED(-3882.4562)), vec4((vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0)), mix(float(_GLF_FUZZED(3095.9311)), float(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0))), bool(true)))), 0.0, 0.0))[0], (vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0)), mix(float(_GLF_FUZZED(3095.9311)), float(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0))), bool(true)))), 0.0, 0.0))[1], _GLF_FUZZED(51.34), (vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0)), mix(float(_GLF_FUZZED(3095.9311)), float(float(mat2x4(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0))), bool(true)))), 0.0, 0.0))[3]), bvec4(true, true, false, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))))), 1.0, 0.0, 0.0, 1.0)))))), bool(true))))), 0.0))))))))
         break;
        {
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            discard;
          }
         else
          {
          }
         if(_GLF_DEAD(false))
          break;
         do
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
            }
           else
            {
             for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
              {
               float GLF_live12grey = _GLF_FUZZED((-9.7));
               if(_GLF_DEAD(false))
                discard;
               {
                GLF_live12grey = 0.5 + float(GLF_live12data[8]) / 10.0;
               }
              }
             ((GLF_live4a.x) * (GLF_live4b.y) - (GLF_live4b.x) * (GLF_live4a.y));
            }
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       }
       {
        {
         1;
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            discard;
          }
        }
       }
       result += 0.4;
      }
     else
      {
       for(int _injected_loop_counter = (1 | 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
        {
         if(mod(float(i), round(thirty_two)) <= _GLF_IDENTITY(0.01, max(_GLF_IDENTITY(0.01, float(mat3(0.01, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0))), 0.01)))
          {
           result += _GLF_IDENTITY(100.0, max(100.0, 100.0));
           if(_GLF_DEAD(false))
            continue;
           if(_GLF_DEAD(false))
            {
             for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), int(4))); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
              {
               discard;
              }
            }
          }
        }
       {
        if(_GLF_DEAD(false))
         {
          if(_GLF_DEAD(false))
           break;
          if(_GLF_DEAD(false))
           {
            _GLF_color = _GLF_IDENTITY(vec4(1.8, 52.68, -58.62, 126.639), min(vec4(1.8, 52.68, -58.62, 126.639), vec4(1.8, 52.68, -58.62, 126.639)));
           }
          continue;
         }
        if(_GLF_DEAD(false))
         {
          if(_GLF_WRAPPED_IF_FALSE(false))
           {
           }
          else
           {
            if(_GLF_DEAD(false))
             return 1.0;
           }
          break;
         }
        if(_GLF_DEAD(false))
         return 1.0;
        float GLF_live0result = _GLF_FUZZED(((+ _GLF_IDENTITY(1286.9139, 0.0 + (1286.9139)))));
        {
         if(_GLF_DEAD(false))
          break;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          break;
         GLF_live0result;
         if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))
          {
           {
            int GLF_live9v = _GLF_FUZZED(87379);
            if(_GLF_IDENTITY((GLF_live9v & 1) == 1, ! (_GLF_IDENTITY(! ((GLF_live9v & 1) == 1), bool(bool(! ((GLF_live9v & 1) == 1)))))))
             {
              GLF_live9v = 3 * GLF_live9v + 1;
             }
            else
             {
              GLF_live9v /= 2;
             }
           }
           break;
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             if(_GLF_DEAD(false))
              {
               for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                {
                 discard;
                }
              }
             _GLF_color = min(vec4(826.743, -0.8, 0.5, -5650.8289), -5.4);
            }
          }
         if(_GLF_DEAD(false))
          continue;
        }
       }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
        {
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 >> _GLF_IDENTITY(int(8), _GLF_IDENTITY(int(8), (false ? _GLF_FUZZED(GLF_live12N) : int(8)))))); _injected_loop_counter --)
          {
           _GLF_color = vec4(-1.0, 5.2, 245.567, 8.9);
          }
         for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
          {
           ivec2 GLF_live15p = _GLF_FUZZED(ivec2(71069, 93825));
           {
            GLF_live15p.y --;
           }
          }
        }
       if(_GLF_DEAD(false))
        discard;
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        continue;
       break;
      }
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          break;
         do
          {
           {
            {
             int GLF_live15_looplimiter1 = 0;
             if(GLF_live15_looplimiter1 >= 6)
              {
               if(_GLF_WRAPPED_IF_FALSE(false))
                {
                }
               else
                {
                 1;
                }
              }
            }
            {
             1;
            }
           }
           _GLF_color = clamp(vec4(-985.000, 36.63, 6.0, 99.14), vec4(80.08, -8981.5641, 7.5, _GLF_IDENTITY(356.251, max(_GLF_IDENTITY(356.251, mix(float(_GLF_FUZZED(5.6)), float(356.251), bool(true))), 356.251))), vec4(-4787.3455, 8.7, 3.5, 4541.4443));
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       {
        float GLF_live14th = _GLF_FUZZED(88.47);
        if(_GLF_DEAD(false))
         continue;
        {
         GLF_live14th = - GLF_live14th;
        }
       }
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        discard;
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
         if(_GLF_DEAD(false))
          break;
        }
       else
        {
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(false))
            discard;
           break;
          }
         {
          {
           int GLF_live10treeIndex = 0;
           GLF_live10makeTreeNode(GLF_live10tree[0], 9);
           GLF_live10treeIndex ++;
           GLF_live10insert(GLF_live10treeIndex, 5);
           GLF_live10treeIndex ++;
           GLF_live10insert(_GLF_IDENTITY(GLF_live10treeIndex, max(GLF_live10treeIndex, GLF_live10treeIndex)), 12);
           GLF_live10treeIndex ++;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
            {
             _GLF_color = vec4(-1.8, 10.56, -6.6, -248.250);
            }
           GLF_live10insert(GLF_live10treeIndex, 15);
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            continue;
           GLF_live10treeIndex ++;
           GLF_live10insert(GLF_live10treeIndex, 7);
           GLF_live10treeIndex ++;
           GLF_live10insert(GLF_live10treeIndex, 8);
           GLF_live10treeIndex ++;
           GLF_live10insert(GLF_live10treeIndex, 2);
           GLF_live10treeIndex ++;
           GLF_live10insert(GLF_live10treeIndex, 6);
           GLF_live10treeIndex ++;
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(4), int(4))) >> _GLF_IDENTITY(int(4), _GLF_IDENTITY(int(4), 0 + (int(4)))))); _injected_loop_counter ++)
            {
             GLF_live10insert(GLF_live10treeIndex, 17);
            }
           GLF_live10treeIndex ++;
           GLF_live10insert(GLF_live10treeIndex, 13);
           {
            {
             int GLF_live12_looplimiter6 = 0;
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
              }
             else
              {
               for(int GLF_live12j = 0; GLF_live12j < 10; GLF_live12j ++)
                {
                 if(GLF_live12_looplimiter6 >= 3)
                  {
                   break;
                  }
                 GLF_live12_looplimiter6 ++;
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  break;
                 GLF_live12temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live12j, 10)] = GLF_live12data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live12j, 10)];
                }
              }
            }
           }
           int GLF_live10count = 0;
           {
            int GLF_live10_looplimiter2 = 0;
            {
             vec2 GLF_live13coord = _GLF_FUZZED(vec2(751.760, 15.90));
             if(GLF_live13coord.x > 0.4)
              {
               if(GLF_live13coord.y < 0.6)
                {
                 uvec2 GLF_live13icoord = uvec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                 uint GLF_live13res1 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) >> (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                 uint GLF_live13res2 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) << (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                 float GLF_live13res = float(((GLF_live13res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live13res1 & 1u) != 0u ? 1u : 0u));
                 GLF_live13_GLF_color = vec4(GLF_live13res, GLF_live13res, GLF_live13res, 1.0);
                }
               else
                {
                 ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                 int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
                 if(_GLF_DEAD(false))
                  continue;
                 int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
                 int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
                 GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
                }
               for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1)))); _injected_loop_counter ++)
                {
                 if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
                  discard;
                }
              }
             else
              {
               ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
               if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
                discard;
               int GLF_live13v = (GLF_live13icoord.x ^ GLF_live13icoord.y) * GLF_live13icoord.y;
               bool GLF_live13res1 = ((GLF_live13v >> 10) & 1) != 0;
               bool GLF_live13res2 = ((GLF_live13v >> 11) & 4) != 0;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat2(0.0, 1.0, 0.0, 0.0))))))
                discard;
               bool GLF_live13res3 = ((GLF_live13v >> 12) & 8) != 0;
               GLF_live13_GLF_color = vec4(GLF_live13res1 ? 1.0 : 0.0, GLF_live13res2 ? 1.0 : 0.0, GLF_live13res3 ? 1.0 : 0.0, 1);
              }
            }
            for(int GLF_live10i = 0; GLF_live10i < 20; GLF_live10i ++)
             {
              if(GLF_live10_looplimiter2 >= 5)
               {
                break;
               }
              if(_GLF_DEAD(false))
               continue;
              GLF_live10_looplimiter2 ++;
              int GLF_live10result = GLF_live10search(GLF_live10i);
              switch(GLF_live10i)
               {
                case 9:
                case 5:
                case 12:
                if(_GLF_DEAD(false))
                 break;
                case 15:
                case 7:
                case 8:
                case 2:
                case 6:
                case 17:
                case 13:
                if(GLF_live10result == _GLF_IDENTITY(GLF_live10i, 0 + (GLF_live10i)))
                 {
                  if(_GLF_DEAD(false))
                   break;
                  GLF_live10count ++;
                  if(_GLF_DEAD(false))
                   {
                    _GLF_color = mix(vec4(17.06, 597.034, 92.51, -992.789), vec4(1.2, 30.17, 59.60, -37.64), determinant(mat3(-498.584, -3534.7799, -2085.5217, -899.142, -8.6, -7.0, 5913.9844, 9.2, _GLF_IDENTITY(224.611, 1.0 * (224.611)))));
                    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                     discard;
                   }
                 }
                break;
                default:
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                 break;
                if(_GLF_IDENTITY(GLF_live10result, max(GLF_live10result, _GLF_IDENTITY(GLF_live10result, (GLF_live10result) | 0))) == - 1)
                 {
                  {
                   vec2 GLF_live13coord = _GLF_FUZZED(vec2(-3.2, 0.1));
                   {
                    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec3(0.0, 1.0, 1.0), vec3(1.0, 0.0, 0.0)), dot(vec3(0.0, 1.0, 1.0), vec3(1.0, 0.0, 0.0)))))))
                     return 1.0;
                    uvec2 GLF_live13icoord = uvec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                    uint GLF_live13res1 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) >> (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                    if(_GLF_DEAD(false))
                     return 1.0;
                    uint GLF_live13res2 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) << (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                    float GLF_live13res = float(((GLF_live13res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live13res1 & 1u) != 0u ? 1u : 0u));
                    do
                     {
                      GLF_live13_GLF_color = vec4(GLF_live13res, GLF_live13res, GLF_live13res, 1.0);
                     }
                    while(_GLF_WRAPPED_LOOP(false));
                   }
                  }
                  GLF_live10count ++;
                 }
                if(_GLF_DEAD(false))
                 {
                  _GLF_color = vec4(2.6, 52.51, -6.5, -57.22);
                 }
                break;
               }
             }
           }
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 & (1 & int(_GLF_ONE(1.0, injectionSwitch.y))))); _injected_loop_counter ++)
            {
             if(GLF_live10count == 20)
              {
               GLF_live10_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
              }
             else
              {
               _GLF_IDENTITY(GLF_live10_GLF_color = vec4(0.0, 0.0, 1.0, 1.0), (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? GLF_live10_GLF_color = vec4(0.0, 0.0, 1.0, 1.0) : _GLF_FUZZED(_GLF_color)));
               if(_GLF_DEAD(false))
                {
                 for(int _injected_loop_counter = (0 >> _GLF_IDENTITY(int(5), int(5))); _GLF_WRAPPED_LOOP(_injected_loop_counter != _GLF_IDENTITY(1, (1) / 1)); _injected_loop_counter ++)
                  {
                   discard;
                  }
                }
              }
            }
          }
         }
         if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, false || (gl_FragCoord.y < 0.0))))))
          {
           if(_GLF_DEAD(false))
            {
             {
              float GLF_live14th = _GLF_FUZZED(-59.33);
              vec2 GLF_live14a = _GLF_FUZZED(vec2(8883.3729, 49.67));
              if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
               {
               }
              else
               {
                if(GLF_live14a.y < GLF_live14a.x)
                 {
                  GLF_live14th = 0.5 - GLF_live14th;
                  if(_GLF_WRAPPED_IF_FALSE(false))
                   {
                   }
                  else
                   {
                    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                     return 1.0;
                   }
                 }
               }
             }
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
              {
               _GLF_color = vec4((-3.5 + 4961.2708), vec2(-6051.9823, -7804.3083), 5.2);
              }
             else
              {
              }
            }
           do
            {
             _GLF_color = vec4(-4.1, 312.909, -987.618, _GLF_IDENTITY(510.301, max(510.301, 510.301)));
            }
           while(_GLF_WRAPPED_LOOP(false));
           if(_GLF_DEAD(false))
            continue;
          }
        }
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         if(_GLF_IDENTITY(float(i), float(mat3(float(i), 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0))) >= limit)
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            return 1.0;
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            {
            }
           else
            {
             {
              {
               GLF_live10_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
              }
             }
             return result;
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
            {
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
              }
             else
              {
               return 1.0;
              }
            }
          }
        }
       else
        {
        }
       {
        if(_GLF_DEAD(false))
         return 1.0;
        {
         0.0;
        }
        if(_GLF_DEAD(false))
         discard;
       }
       if(_GLF_DEAD(false))
        discard;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return 1.0;
       if(_GLF_DEAD(false))
        continue;
      }
    }
  }
 {
  {
   float GLF_live14th = _GLF_FUZZED(-655.000);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       GLF_live14th = - GLF_live14th;
      }
     else
      {
      }
     if(_GLF_DEAD(false))
      return 1.0;
    }
   else
    {
    }
  }
  vec3 GLF_live0c = _GLF_FUZZED(_GLF_IDENTITY((721.614 / vec3(-31.54, -3768.4323, 980.246)), mat3(_GLF_ONE(1.0, injectionSwitch.y)) * ((721.614 / vec3(-31.54, -3768.4323, 980.246)))));
  int GLF_live0i = _GLF_FUZZED(ivec2(99859, -94000).g);
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return 1.0;
     {
      do
       {
        GLF_live11_GLF_color = texture(GLF_live11tex, GLF_live11gl_FragCoord.xy * (1.0 / 256.0));
       }
      while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
     }
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return 1.0;
      }
     else
      {
      }
    }
    do
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
         {
          {
           GLF_live11_GLF_color = texture(GLF_live11tex, GLF_live11gl_FragCoord.xy * (1.0 / 256.0));
          }
         }
        else
         {
         }
        do
         {
          return _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(limit) : 1.0));
         }
        while(_GLF_WRAPPED_LOOP(false));
       }
     }
    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
    return 1.0;
    {
     {
      GLF_live11_GLF_color = texture(GLF_live11tex, GLF_live11gl_FragCoord.xy * (1.0 / 256.0));
      if(_GLF_DEAD(false))
       {
        _GLF_color = asinh(vec4(8.8, -6.8, 267.561, 94.73));
       }
     }
    }
   }
  if(_GLF_DEAD(false))
   return 1.0;
  {
   GLF_live0c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0i, 3)] = GLF_live0c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0i, 3)] * GLF_live0c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0i, 3)];
  }
  do
   {
    do
     {
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(false))
         return 1.0;
        return 1.0;
       }
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
           {
            return 1.0;
           }
          else
           {
           }
         }
        _GLF_color = faceforward(vec4(570.853, 1185.0017, -9.6, 6.2), (vec4(-335.951, -8.5, 3.1, -4428.5454) / 63.17), vec4(120.026, -81.66, 3.2, 76.15));
       }
     }
    while(_GLF_IDENTITY(_GLF_WRAPPED_LOOP(false), true && (_GLF_WRAPPED_LOOP(false))));
   }
  while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
  if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, true && (_GLF_IDENTITY(false, ! (! (false)))))))
   {
   }
  else
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
     {
      _GLF_color = vec4(-0.1, -9.1, -7994.3590, 2.2);
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     return 1.0;
    {
     {
      GLF_live11_GLF_color = texture(GLF_live11tex, GLF_live11gl_FragCoord.xy * (1.0 / 256.0));
     }
    }
    do
     {
      if(_GLF_IDENTITY(_GLF_DEAD(false), _GLF_IDENTITY(bool(bvec4(_GLF_DEAD(false), false, _GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), bool(bvec3(! (false), false, true))))), true)), bool(bvec2(bool(bvec4(_GLF_DEAD(false), false, _GLF_IDENTITY(false, bool(bvec4(false, false, true, false))), true)), false)))))
       return 1.0;
     }
    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
    {
     int GLF_live8_looplimiter0 = 0;
     if(GLF_live8_looplimiter0 >= 4)
      {
       1;
      }
    }
    for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_GLF_IDENTITY(_injected_loop_counter, min(_injected_loop_counter, _GLF_IDENTITY(_injected_loop_counter, min(_injected_loop_counter, _injected_loop_counter)))) != 0); _injected_loop_counter --)
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return 1.0;
        for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 | 0)); _injected_loop_counter --)
         {
          {
           float GLF_live14z = _GLF_FUZZED(8.7);
           vec2 GLF_live14a = _GLF_FUZZED(vec2(-912.464, 5377.6689));
           if(GLF_live14a.y > GLF_live14a.x)
            {
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
              }
             else
              {
               GLF_live14z = GLF_live14a.x / GLF_live14a.y;
              }
            }
           else
            {
             if(_GLF_DEAD(false))
              break;
             GLF_live14z = GLF_live14a.y / GLF_live14a.x;
            }
          }
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-8.8, -891.006, 46.41, 5981.2990);
           }
          {
           vec2 GLF_live14v = _GLF_FUZZED(vec2(-2896.1393, -4.8));
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_DEAD(false))
              return 1.0;
            }
           else
            {
            }
           if(length(GLF_live14v) < 0.001)
            {
             0.0;
            }
          }
          if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))
           {
            if(_GLF_DEAD(false))
             break;
            _GLF_color = vec4(-109.730, 40.40, 332.591, -38.75);
            {
             if(_GLF_IDENTITY(_GLF_DEAD(false), false || (_GLF_IDENTITY(_GLF_DEAD(false), false || (_GLF_DEAD(false))))))
              {
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                }
               else
                {
                 return 1.0;
                }
               if(_GLF_DEAD(false))
                {
                 _GLF_color = exp(vec4(-4.0, -460.805, 3580.3680, -1.8));
                }
              }
             float GLF_live5th = _GLF_FUZZED(-413.158);
             if(_GLF_DEAD(false))
              continue;
             vec2 GLF_live5a = _GLF_FUZZED((1.6 / vec2(7.5, -943.354)));
             if(_GLF_IDENTITY(GLF_live5a.y, float(vec4(_GLF_IDENTITY(GLF_live5a.y, (true ? GLF_live5a.y : _GLF_FUZZED(-7.7))), 0.0, 1.0, 1.0))) < GLF_live5a.x)
              {
               GLF_live5th = 0.5 - GLF_live5th;
              }
            }
            if(_GLF_DEAD(false))
             {
              _GLF_color = vec4(3566.5927, 1451.2532, 2261.8947, -9.0);
              {
               int GLF_live15_looplimiter1 = 0;
               ivec2 GLF_live15p = _GLF_FUZZED((ivec2(-24018, 4326)));
               if(_GLF_DEAD(false))
                continue;
               while(GLF_live15p.x > 15)
                {
                 if(GLF_live15_looplimiter1 >= 6)
                  {
                   break;
                  }
                 GLF_live15_looplimiter1 ++;
                 GLF_live15p.x -= 16;
                }
              }
             }
           }
         }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         discard;
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         return _GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, (1.0) - 0.0)));
        for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (_GLF_IDENTITY(0, clamp(_GLF_IDENTITY(0, 0 ^ (0)), _GLF_IDENTITY(_GLF_IDENTITY(0, min(_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(GLF_live0i))), 0)), (0) | (0)), _GLF_IDENTITY(0, (_GLF_IDENTITY(0, max(0, 0))) * 1))) >> _GLF_IDENTITY(int(3), _GLF_IDENTITY(int(3), 0 | _GLF_IDENTITY((int(_GLF_IDENTITY(3, min(_GLF_IDENTITY(3, max(_GLF_IDENTITY(3, (3) | (3)), 3)), 3)))), (true ? (int(_GLF_IDENTITY(3, min(_GLF_IDENTITY(3, max(_GLF_IDENTITY(3, (3) | (3)), 3)), 3)))) : _GLF_FUZZED(int(9676u)))))))); _injected_loop_counter --)
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
           break;
          _GLF_color = _GLF_IDENTITY(vec4(6.2, 64.26, -4.8, -76.44), mix(vec4((vec4(6.2, 64.26, -4.8, -76.44))[0], _GLF_FUZZED(61.24), _GLF_FUZZED(float(136034u)), (vec4(6.2, 64.26, -4.8, -76.44))[3]), vec4(_GLF_FUZZED((756.066 - -8.2)), (vec4(6.2, 64.26, -4.8, -76.44))[1], (vec4(6.2, 64.26, -4.8, -76.44))[2], _GLF_FUZZED(-5348.7178)), bvec4(false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), true, false)));
         }
       }
      {
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return 1.0;
        vec2 GLF_live14coord = GLF_live14gl_FragCoord.xy * (1.0 / 256.0);
        vec2 GLF_live14coord1 = GLF_live14polarize(GLF_live14coord + vec2(20.0 / 256.0, - 80.0 / 256.0));
        vec2 GLF_live14coord2 = GLF_live14polarize(GLF_live14coord + vec2(- 60.0 / 256.0, 40.0 / 256.0));
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         continue;
        vec2 GLF_live14coord3 = GLF_live14polarize(GLF_live14coord);
        GLF_live14coord = GLF_live14coord1 - GLF_live14coord2 + GLF_live14coord3;
        do
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           discard;
         }
        while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))));
        GLF_live14coord = floor(GLF_live14coord * 256.0) / 256.0;
        GLF_live14_GLF_color = vec4(texture(GLF_live14tex, GLF_live14coord).xyz, 1.0);
       }
      }
     }
   }
  do
   {
    if(_GLF_WRAPPED_IF_FALSE(false))
     {
     }
    else
     {
      if(_GLF_DEAD(false))
       {
        do
         {
          return 1.0;
         }
        while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
       }
     }
   }
  while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
 }
 return result;
}
void main()
{
 vec3 c = vec3(7.0, 8.0, 9.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 float thirty_two = round(_GLF_IDENTITY(_GLF_IDENTITY(resolution.x / 8.0, mix(float(_GLF_FUZZED(-5859.4007)), float(resolution.x / 8.0), bool(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))), (resolution.x / 8.0) - 0.0));
 do
  {
   if(_GLF_DEAD(false))
    return;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))));
 for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(6), _GLF_IDENTITY(int(6), 0 | (int(6))))) >> _GLF_IDENTITY(int(6), _GLF_IDENTITY(int(6), (false ? _GLF_FUZZED(GLF_live12N) : _GLF_IDENTITY(int(6), (int(6)) - 0))))); _GLF_WRAPPED_LOOP(_injected_loop_counter != (0 | 0)); _injected_loop_counter --)
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(97.70, 3.2, 92.09, 9.4);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(vec4(0.0, 0.0, 0.0, 0.0))))))
      return;
    }
  }
 if(_GLF_DEAD(false))
  return;
 c.x = compute_value(gl_FragCoord.x, thirty_two);
 if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, bool(bvec3(false, true, true)))))
  {
  }
 else
  {
   {
    {
     1;
    }
   }
   c.y = compute_value(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, clamp(gl_FragCoord, _GLF_IDENTITY(gl_FragCoord, vec4(0.0, 0.0, 0.0, 0.0) + (gl_FragCoord)), _GLF_IDENTITY(gl_FragCoord, vec4(mat3x2(gl_FragCoord, 0.0, 0.0))))), mix(vec4(_GLF_IDENTITY((gl_FragCoord)[0], ((gl_FragCoord)[0]) - sqrt(0.0)), (gl_FragCoord)[1], (gl_FragCoord)[2], (gl_FragCoord)[3]), vec4(_GLF_FUZZED(float(true)), _GLF_FUZZED(_GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(-407.872)), float(1.0), bool(true)))))), _GLF_FUZZED(5766.6217), _GLF_FUZZED(295.359)), bvec4(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, (false ? _GLF_FUZZED(GLF_live7gl_FragCoord) : gl_FragCoord)).y < 0.0)), false, false, _GLF_FALSE(false, (gl_FragCoord.x < 0.0))))).y, _GLF_IDENTITY(thirty_two, (thirty_two) / 1.0));
  }
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(3653.9159, -8.3, 6370.3448, -5505.3230);
   }
  if(_GLF_DEAD(false))
   {
    do
     {
      return;
     }
    while(_GLF_WRAPPED_LOOP(false));
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-709.363, _GLF_IDENTITY(-162.626, mix(float(-162.626), float(_GLF_FUZZED(_GLF_IDENTITY(1333.9614, _GLF_IDENTITY(clamp(1333.9614, _GLF_IDENTITY(1333.9614, (1333.9614) - 0.0), 1333.9614), mix(float(_GLF_FUZZED(-452.890)), float(clamp(1333.9614, _GLF_IDENTITY(1333.9614, (1333.9614) - 0.0), 1333.9614)), bool(true)))))), bool(false))), _GLF_IDENTITY(-85.63, round(length(normalize(vec3(1.0, _GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(-91.20)), float(_GLF_IDENTITY(1.0, clamp(1.0, 1.0, 1.0))), bool(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))), 1.0)))) * (-85.63)), 380.515);
    if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(false, true && (false)), false, false)), (bool(bvec3(_GLF_IDENTITY(false, true && (false)), false, false))) || false)), (_GLF_IDENTITY(false, bool(bool(false)))) || false)))
     {
      if(_GLF_WRAPPED_IF_FALSE(false))
       {
       }
      else
       {
        if(_GLF_DEAD(false))
         return;
       }
      return;
     }
    {
     {
      0.0;
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
         {
         }
        else
         {
          return;
         }
       }
     }
    }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      do
       {
        {
         1;
        }
       }
      while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
      _GLF_color = vec4(8887.6190, 7.0, 1149.9846, -887.306);
     }
   }
  vec2 GLF_live1coord = _GLF_FUZZED(vec2(7339.7745, 67.97));
  int GLF_live1_looplimiter0 = 0;
  if(_GLF_DEAD(false))
   return;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec4(-8304.0445, -2.6, -59.53, -792.682);
   }
  if(_GLF_WRAPPED_IF_FALSE(false))
   {
   }
  else
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return;
   }
  float GLF_live1uvstep = _GLF_FUZZED(_GLF_IDENTITY(vec4(1.8, -46.83, -680.586, -81.84), vec4(mat4x3(vec4(1.8, -46.83, -680.586, -81.84), 1.0, _GLF_IDENTITY(dot(vec4(0.0, 1.0, 0.0, 0.0), vec4(0.0, 1.0, 0.0, 0.0)), dot(vec4(0.0, 1.0, 0.0, 0.0), vec4(0.0, 1.0, 0.0, 0.0))), 1.0, 0.0, 1.0, 1.0, 1.0, 1.0))).w);
  if(_GLF_DEAD(false))
   {
    if(_GLF_DEAD(false))
     return;
    return;
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = _GLF_IDENTITY(exp2(vec4(9.7, 1.4, -56.66, -1427.3061)), (exp2(vec4(9.7, 1.4, -56.66, -1427.3061))) * mat4(1.0));
    {
     vec2 GLF_live13coord = _GLF_FUZZED((vec2(9921.8025, 57.24) / (vec2(-94.25, 1810.7047) / -5940.2258)));
     {
      if(_GLF_DEAD(false))
       return;
      ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
      int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
      int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
      int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
      GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
      if(_GLF_DEAD(false))
       return;
     }
    }
   }
  int GLF_live1i = _GLF_FUZZED(ivec4(32892, _GLF_IDENTITY(-30368, 0 ^ (-30368)), _GLF_IDENTITY(-49309, (false ? _GLF_FUZZED(51363) : _GLF_IDENTITY(-49309, clamp(-49309, -49309, -49309)))), -68068).r);
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, determinant(mat4(0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)), 0.0, 0.0, sin(0.0)))))))
   return;
  if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
   }
  else
   {
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       return;
      if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))
       return;
      for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
       {
        return;
       }
     }
   }
  if(_GLF_DEAD(false))
   return;
  vec4 GLF_live1res = _GLF_FUZZED(vec4(-4.3, 82.80, _GLF_IDENTITY(4.5, 1.0 * (4.5)), -8114.9111));
  for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
   {
    if(_GLF_DEAD(false))
     break;
    for(int GLF_live1j = 0; GLF_live1j < 3; GLF_live1j ++)
     {
      if(GLF_live1_looplimiter0 >= 5)
       {
        do
         {
          if(_GLF_DEAD(false))
           return;
         }
        while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), bool(bool(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))));
        if(_GLF_DEAD(false))
         break;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         discard;
        if(_GLF_DEAD(false))
         {
          do
           {
            if(_GLF_DEAD(false))
             {
              if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
               {
                if(_GLF_WRAPPED_IF_FALSE(false))
                 {
                 }
                else
                 {
                  _GLF_color = (vec4(614.732, 794.226, 8.9, -997.279) * 0.9);
                 }
                if(_GLF_DEAD(false))
                 return;
               }
              break;
             }
            int GLF_live6i = _GLF_FUZZED(int((mat4(14.38, -6.2, 5.1, -968.452, -80.50, -4.3, 7650.8193, -2.0, 6.9, 6.6, -565.687, 2865.4353, -4407.8985, -3.8, -88.04, -7.6) != mat4(-631.385, -8489.3486, 53.92, 3.7, 91.28, -773.880, -9713.8769, -6.3, -4715.8080, -1.0, 3.4, -1896.5402, 79.59, 4848.2923, 995.002, 89.45))));
            int GLF_live6_looplimiter0 = 0;
            vec2 GLF_live6coord = _GLF_IDENTITY(_GLF_FUZZED(((mat2x3(699.264, -5178.1486, 9.0, 623.546, 0.1, 762.183) * vec2(43.15, 7.2)) * mat2x3(36.32, 4773.3781, 88.43, -9.6, 1.9, 8.8))), (_GLF_FUZZED(((mat2x3(699.264, -5178.1486, 9.0, 623.546, 0.1, 762.183) * vec2(43.15, 7.2)) * mat2x3(36.32, 4773.3781, 88.43, -9.6, 1.9, 8.8)))) + sin(abs(vec2(0.0, 0.0))));
            do
             {
              while(GLF_live6i < 1 && GLF_live6coord.x > 1.0 || GLF_live6coord.y > _GLF_IDENTITY(1.0, (1.0) * _GLF_IDENTITY(dot(vec4(0.0, 1.0, 0.0, 0.0), vec4(0.0, 1.0, sqrt(0.0), 0.0)), dot(vec4(0.0, 1.0, 0.0, 0.0), vec4(0.0, 1.0, sqrt(0.0), 0.0)))))
               {
                if(GLF_live6_looplimiter0 >= 6)
                 {
                  if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, false || (injectionSwitch.x > injectionSwitch.y))) || false)))))
                   {
                    _GLF_color = vec3(0.8, _GLF_IDENTITY(-1.8, (-1.8) - 0.0), -2831.0645).zyxx;
                    {
                     int GLF_live15_looplimiter1 = 0;
                     ivec2 GLF_live15p = _GLF_FUZZED(ivec2(-77498, 96701));
                     {
                      if(GLF_live15_looplimiter1 >= 6)
                       {
                        1;
                       }
                      GLF_live15_looplimiter1 ++;
                      GLF_live15p.x -= 16;
                     }
                    }
                    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                     break;
                   }
                  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   return;
                  break;
                  if(_GLF_DEAD(false))
                   {
                    do
                     {
                      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
                       continue;
                      if(_GLF_DEAD(false))
                       {
                        _GLF_color = (mat2x4(866.097, -4345.4108, 4.5, -9776.7097, -166.359, -6076.9948, 280.007, -607.111) * vec2(94.10, 1.5));
                       }
                      if(_GLF_DEAD(false))
                       break;
                      {
                       int GLF_live8_looplimiter0 = 0;
                       if(_GLF_DEAD(false))
                        {
                         _GLF_color = vec4(-3.7, vec2(-8.7, 6.8), 5.5);
                        }
                       if(GLF_live8_looplimiter0 >= 4)
                        {
                         1;
                         if(_GLF_DEAD(false))
                          return;
                        }
                      }
                      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                       {
                        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, _GLF_IDENTITY((gl_FragCoord.x >= 0.0), _GLF_IDENTITY(bool(bool((gl_FragCoord.x >= 0.0))), (bool(bool((gl_FragCoord.x >= 0.0)))) && true)))))
                         {
                          discard;
                         }
                        else
                         {
                         }
                       }
                     }
                    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
                    discard;
                   }
                 }
                if(_GLF_WRAPPED_IF_TRUE(true))
                 {
                  GLF_live6_looplimiter0 ++;
                 }
                else
                 {
                 }
                if(_GLF_IDENTITY(GLF_live6coord.x > 1.0, ! (! (_GLF_IDENTITY(GLF_live6coord.x > 1.0, ! (! (GLF_live6coord.x > 1.0)))))))
                 {
                  {
                   {
                    vec2 GLF_live15pos = GLF_live15gl_FragCoord.xy / GLF_live15resolution;
                    ivec2 GLF_live15ipos = ivec2(int(GLF_live15pos.x * 8.0), int(GLF_live15pos.y * 8.0));
                    int GLF_live15v = (GLF_live15ipos.x & 5) | (GLF_live15ipos.y & 10);
                    int GLF_live15w = (GLF_live15ipos.y & 5) | (GLF_live15ipos.x & 10);
                    ivec2 GLF_live15p = ivec2(GLF_live15v * 8 + GLF_live15w, 0);
                    int GLF_live15i = _GLF_FUZZED(GLF_live15w);
                    for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                     {
                      int GLF_live15_looplimiter0 = 0;
                      for(                      GLF_live15i = 0;
 GLF_live15i < 100; GLF_live15i ++)
                       {
                        if(_GLF_DEAD(false))
                         return;
                        if(GLF_live15_looplimiter0 >= 6)
                         {
                          break;
                         }
                        GLF_live15_looplimiter0 ++;
                        GLF_live15p = GLF_live15iter(GLF_live15p);
                       }
                     }
                    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                     break;
                    if(GLF_live15p.x < 0)
                     {
                      GLF_live15p.x = - GLF_live15p.x;
                     }
                    {
                     int GLF_live15_looplimiter1 = 0;
                     while(GLF_live15p.x > 15)
                      {
                       if(GLF_live15_looplimiter1 >= 6)
                        {
                         break;
                        }
                       do
                        {
                         GLF_live15_looplimiter1 ++;
                        }
                       while(_GLF_WRAPPED_LOOP(false));
                       GLF_live15p.x -= 16;
                       if(_GLF_DEAD(false))
                        discard;
                      }
                     if(_GLF_DEAD(false))
                      break;
                    }
                    GLF_live15_GLF_color = GLF_live15pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15p.x, 16)];
                   }
                  }
                  GLF_live6coord.x -= 1.0;
                 }
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                 {
                  for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                   {
                    if(_GLF_DEAD(false))
                     {
                      _GLF_color = vec4(-3.8, _GLF_IDENTITY(309.311, (309.311) / 1.0), 2015.3082, 48.11);
                     }
                   }
                  if(_GLF_DEAD(false))
                   {
                    {
                     {
                      0.0;
                     }
                    }
                    for(int _injected_loop_counter = ((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), _GLF_IDENTITY(int(5), 0 + (int(5))))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                     {
                      _GLF_color = step(-78.53, cos(vec4(-584.433, -7.7, 3.9, -83.98)));
                     }
                   }
                  if(_GLF_DEAD(false))
                   discard;
                  continue;
                 }
                if(GLF_live6coord.y > 1.0)
                 _GLF_IDENTITY(GLF_live6coord.y -= 1.0, (GLF_live6coord.y -= 1.0) * 1.0);
                if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
                 break;
                for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                 {
                  if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)))))
                   break;
                  if(_GLF_DEAD(false))
                   return;
                 }
                if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, false || (true))))
                 {
                  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   discard;
                  do
                   {
                    GLF_live6coord *= 2.0;
                   }
                  while(_GLF_WRAPPED_LOOP(false));
                 }
                else
                 {
                  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                   break;
                 }
                if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                 {
                  _GLF_color = abs(vec4(4.0, -29.49, -2392.0436, -86.38));
                  if(_GLF_DEAD(false))
                   continue;
                  {
                   {
                    1;
                   }
                  }
                 }
                for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter != (int(_GLF_ZERO(0.0, injectionSwitch.x)) | 1)); _injected_loop_counter ++)
                 {
                  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(abs(0.0))))))
                   return;
                  if(_GLF_DEAD(false))
                   break;
                  GLF_live6i ++;
                  if(_GLF_DEAD(false))
                   {
                    _GLF_color = vec4(-3006.0293, 0.2, -5.8, -4.4);
                   }
                 }
               }
             }
            while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
            {
             {
              GLF_live11_GLF_color = texture(GLF_live11tex, GLF_live11gl_FragCoord.xy * _GLF_IDENTITY((1.0 / 256.0), clamp((1.0 / 256.0), (1.0 / 256.0), (1.0 / 256.0))));
             }
            }
            if(_GLF_DEAD(false))
             {
              _GLF_color = fwidth(vec4(-1944.8615, -9494.6681, 536.318, -927.897));
              if(_GLF_DEAD(false))
               continue;
             }
            if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), _GLF_IDENTITY(bool(_GLF_IDENTITY(bool((injectionSwitch.x > injectionSwitch.y)), ! (! (bool((injectionSwitch.x > injectionSwitch.y)))))), bool(bvec3(bool(_GLF_IDENTITY(bool((injectionSwitch.x > injectionSwitch.y)), ! (! (bool((injectionSwitch.x > injectionSwitch.y)))))), true, false)))))))
             continue;
           }
          while(_GLF_WRAPPED_LOOP(false));
          break;
         }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
         discard;
        break;
        if(_GLF_DEAD(false))
         {
          do
           {
            discard;
           }
          while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
         }
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(false))
         return;
       }
      else
       {
       }
      GLF_live1_looplimiter0 ++;
      if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, true && (gl_FragCoord.x < 0.0))))))
       {
        {
         do
          {
           1;
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
        }
        continue;
        if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
         {
         }
        else
         {
          float GLF_live14th = _GLF_FUZZED((- -2.4));
          vec2 GLF_live14v = _GLF_FUZZED(vec2(-77.50, -795.776));
          if(GLF_live14v.y < 0.0)
           {
            GLF_live14th = - GLF_live14th;
           }
         }
       }
      {
       {
        vec2 GLF_live14coord = GLF_live14gl_FragCoord.xy * (1.0 / 256.0);
        if(_GLF_DEAD(false))
         continue;
        vec2 GLF_live14coord1 = GLF_live14polarize(GLF_live14coord + vec2(20.0 / 256.0, - 80.0 / 256.0));
        vec2 GLF_live14coord2 = GLF_live14polarize(GLF_live14coord + vec2(- 60.0 / 256.0, 40.0 / 256.0));
        vec2 GLF_live14coord3 = GLF_live14polarize(GLF_live14coord);
        GLF_live14coord = GLF_live14coord1 - GLF_live14coord2 + GLF_live14coord3;
        GLF_live14coord = floor(GLF_live14coord * 256.0) / 256.0;
        GLF_live14_GLF_color = vec4(texture(GLF_live14tex, GLF_live14coord).xyz, 1.0);
       }
      }
      if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y, (false ? _GLF_FUZZED(GLF_live1uvstep) : _GLF_IDENTITY(gl_FragCoord.y, (false ? _GLF_FUZZED(6025.9356) : gl_FragCoord.y)))) < 0.0))))
       continue;
      do
       {
        float GLF_live14th = _GLF_FUZZED(5.9);
        {
         GLF_live14th = - GLF_live14th;
        }
       }
      while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
      if(_GLF_DEAD(false))
       break;
      if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x), _GLF_IDENTITY(true, (true) && true) && (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))))
       continue;
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(_GLF_IDENTITY(! (_GLF_IDENTITY(false, _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(false, false || (false)), true, true)), bool(bvec3(bool(bvec3(_GLF_IDENTITY(false, false || (false)), true, true)), true, false))))), _GLF_IDENTITY(bool(bool(! (_GLF_IDENTITY(false, _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(false, false || (false)), true, true)), bool(bvec3(bool(bvec3(_GLF_IDENTITY(false, false || (false)), true, true)), true, false))))))), bool(bool(bool(bool(! (_GLF_IDENTITY(false, _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(false, false || (false)), true, true)), bool(bvec3(bool(bvec3(_GLF_IDENTITY(false, false || (false)), true, true)), true, false))))))))))), (! (_GLF_IDENTITY(false, bool(bvec3(_GLF_IDENTITY(false, false || (_GLF_IDENTITY(false, (_GLF_IDENTITY(false, ! (! (false)))) && true))), true, true))))) || false)))))
         return;
        GLF_live1res += texture(GLF_live1tex, _GLF_IDENTITY(GLF_live1coord, max(GLF_live1coord, GLF_live1coord)) + vec2(float(_GLF_IDENTITY(GLF_live1i, min(GLF_live1i, GLF_live1i)) - 1) * GLF_live1uvstep, float(GLF_live1j - 1) * GLF_live1uvstep)) * GLF_live1weights[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i * 3 + GLF_live1j, _GLF_IDENTITY(9, min(9, 9)))];
        if(_GLF_DEAD(false))
         continue;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          _GLF_color = log2(dFdy(vec4(4.7, 1.8, 785.939, -531.451)));
         }
       }
      else
       {
        {
         vec2 GLF_live14v = _GLF_FUZZED((vec2(7773.1333, -6.9) * 6.8));
         {
          float GLF_live14pi2 = 1.0 / (355.0 / 113.0);
          if(_GLF_DEAD(false))
           return;
          if(length(GLF_live14v) < 0.001)
           {
            0.0;
           }
          vec2 GLF_live14a = abs(GLF_live14v);
          float GLF_live14z = _GLF_FUZZED(-307.112);
          if(GLF_live14a.y > GLF_live14a.x)
           {
            GLF_live14z = GLF_live14a.x / GLF_live14a.y;
           }
          else
           {
            GLF_live14z = GLF_live14a.y / GLF_live14a.x;
           }
          float GLF_live14th = (0.97 - 0.19 * GLF_live14z * GLF_live14z) * GLF_live14z * GLF_live14pi2;
          if(GLF_live14a.y < GLF_live14a.x)
           {
            GLF_live14th = 0.5 - GLF_live14th;
           }
          if(GLF_live14v.x < 0.0)
           {
            GLF_live14th = 1.0 - GLF_live14th;
           }
          if(GLF_live14v.y < 0.0)
           {
            GLF_live14th = - GLF_live14th;
           }
          GLF_live14th;
         }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         break;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          if(_GLF_DEAD(false))
           return;
          {
           vec2 GLF_live14v = _GLF_FUZZED((-871.688 - vec2(2745.4249, 417.618)));
           {
            float GLF_live14pi2 = 1.0 / (355.0 / 113.0);
            if(length(GLF_live14v) < 0.001)
             {
              0.0;
             }
            if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
             continue;
            vec2 GLF_live14a = abs(GLF_live14v);
            float GLF_live14z = _GLF_FUZZED(-307.112);
            if(GLF_live14a.y > GLF_live14a.x)
             {
              GLF_live14z = GLF_live14a.x / GLF_live14a.y;
             }
            else
             {
              GLF_live14z = GLF_live14a.y / GLF_live14a.x;
             }
            float GLF_live14th = (0.97 - 0.19 * GLF_live14z * GLF_live14z) * GLF_live14z * GLF_live14pi2;
            if(GLF_live14a.y < GLF_live14a.x)
             {
              GLF_live14th = 0.5 - GLF_live14th;
             }
            if(GLF_live14v.x < 0.0)
             {
              GLF_live14th = 1.0 - GLF_live14th;
             }
            if(GLF_live14v.y < 0.0)
             {
              GLF_live14th = - GLF_live14th;
              if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
               break;
             }
            GLF_live14th;
           }
          }
          _GLF_color = (vec4(84.28, -6.4, -7.4, -61.94));
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           discard;
         }
        if(_GLF_DEAD(false))
         break;
       }
      {
       int GLF_live8_looplimiter0 = 0;
       if(_GLF_DEAD(false))
        return;
       do
        {
         if(GLF_live8_looplimiter0 >= _GLF_IDENTITY(4, (_GLF_IDENTITY(4, 0 + (4))) / ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2)))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            discard;
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-2335.0903, -4.6, 5097.6524, 149.543);
            }
           do
            {
             1;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
          }
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
        {
         if(_GLF_DEAD(false))
          discard;
        }
      }
     }
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-101.458, 7.7, 11.95, -1.4);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   {
    int GLF_live8i = _GLF_FUZZED((~ 45622));
    float GLF_live8h = _GLF_FUZZED(float(int(-8.8)));
    float GLF_live8slope = _GLF_FUZZED(699.394);
    float GLF_live8refh = _GLF_FUZZED(_GLF_IDENTITY(-2110.6399, clamp(_GLF_IDENTITY(-2110.6399, 1.0 * (-2110.6399)), -2110.6399, -2110.6399)));
    vec2 GLF_live8coord = _GLF_FUZZED(vec2(vec4(13.38, -7989.8616, -5640.7194, -7347.4353)));
    vec2 GLF_live8uvstep = _GLF_FUZZED(vec2(-165.169, 7408.7747));
    if(_GLF_DEAD(false))
     return;
    {
     int GLF_live8_looplimiter0 = 0;
     while(GLF_live8h < GLF_live8refh && GLF_live8i < 32)
      {
       if(GLF_live8_looplimiter0 >= 4)
        {
         break;
        }
       GLF_live8_looplimiter0 ++;
       GLF_live8coord -= GLF_live8uvstep;
       _GLF_IDENTITY(GLF_live8refh += GLF_live8slope, (GLF_live8refh += GLF_live8slope) + 0.0);
       GLF_live8h = texture(GLF_live8tex, GLF_live8coord).y;
       GLF_live8i ++;
       {
        {
         vec2 GLF_live15pos = GLF_live15gl_FragCoord.xy / GLF_live15resolution;
         ivec2 GLF_live15ipos = ivec2(int(GLF_live15pos.x * 8.0), int(GLF_live15pos.y * 8.0));
         int GLF_live15v = (GLF_live15ipos.x & 5) | (GLF_live15ipos.y & 10);
         if(_GLF_DEAD(false))
          break;
         int GLF_live15w = (GLF_live15ipos.y & 5) | (GLF_live15ipos.x & 10);
         ivec2 GLF_live15p = ivec2(GLF_live15v * 8 + GLF_live15w, 0);
         int GLF_live15i = _GLF_FUZZED(GLF_live15w);
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          discard;
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
           discard;
          int GLF_live15_looplimiter0 = 0;
          for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < ((1 << _GLF_IDENTITY(int(7), _GLF_IDENTITY(int(7), clamp(int(7), int(7), int(7))))) >> _GLF_IDENTITY(int(7), int(7)))); _injected_loop_counter ++)
           {
            for(            GLF_live15i = 0;
 GLF_live15i < 100; GLF_live15i ++)
             {
              if(GLF_live15_looplimiter0 >= 6)
               {
                break;
               }
              GLF_live15_looplimiter0 ++;
              GLF_live15p = GLF_live15iter(GLF_live15p);
             }
           }
         }
         if(GLF_live15p.x < 0)
          {
           GLF_live15p.x = - GLF_live15p.x;
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            return;
          }
         {
          int GLF_live15_looplimiter1 = 0;
          while(GLF_live15p.x > 15)
           {
            if(GLF_live15_looplimiter1 >= 6)
             {
              break;
             }
            GLF_live15_looplimiter1 ++;
            GLF_live15p.x -= 16;
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
             return;
           }
         }
         if(_GLF_DEAD(false))
          discard;
         GLF_live15_GLF_color = GLF_live15pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15p.x, 16)];
        }
       }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat3(0.0, 1.0, 1.0, _GLF_IDENTITY(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), dot(vec2(0.0, 1.0), vec2(1.0, 0.0))), length(vec3(0.0, 0.0, 0.0)), 0.0, 0.0, 0.0, 0.0))))))
        continue;
      }
    }
   }
   return;
  }
 c.z = c.x + c.y;
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   for(int i = 0; i < 3; _GLF_IDENTITY(i ++, _GLF_IDENTITY((_GLF_IDENTITY(i ++, (i ++) - 0)) - 0, 1 * ((_GLF_IDENTITY(i ++, (i ++) - 0)) - 0))))
    {
     {
      if(_GLF_DEAD(false))
       break;
      int GLF_live2directions = _GLF_FUZZED((-12051 >> (-81229 * 94257)));
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = vec4(507.402, 2.8, -888.939, 3.4);
       }
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         discard;
        break;
       }
      {
       for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
        {
         GLF_live2directions += 1;
         if(_GLF_DEAD(false))
          return;
        }
       if(_GLF_DEAD(false))
        continue;
      }
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        if(_GLF_WRAPPED_IF_FALSE(false))
         {
         }
        else
         {
          return;
         }
       }
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = vec4(2.3, -21.89, 4334.6738, -0.5);
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, clamp(injectionSwitch.y, _GLF_IDENTITY(injectionSwitch.y, min(injectionSwitch.y, injectionSwitch.y)), injectionSwitch.y))))))
      {
       if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(_GLF_IDENTITY(false, ! (! (false))), (_GLF_IDENTITY(_GLF_IDENTITY(false, ! (! (false))), bool(bool(_GLF_IDENTITY(false, ! (! (false))))))) && true))))))
        {
         _GLF_color = vec4(-802.065, -3.2, 111.157, 2145.5652);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         do
          {
           discard;
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       discard;
       if(_GLF_DEAD(false))
        break;
      }
     if(c[i] >= _GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(9489.4726)), float(1.0), bool(true)))), float(_GLF_FUZZED(0.8)), bool(false)))), float(_GLF_FUZZED(7.7)), bool(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        break;
       {
        do
         {
          {
           GLF_live11_GLF_color = texture(GLF_live11tex, GLF_live11gl_FragCoord.xy * (1.0 / 256.0));
          }
         }
        while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, true && (false))));
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         discard;
        vec4 GLF_live3texel = _GLF_FUZZED(vec3(9301.9498, -80.88, 4.3).yzxz);
        do
         {
          if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), (_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))) && _GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
           {
            if(_GLF_DEAD(false))
             discard;
            {
             int GLF_live8i = _GLF_FUZZED(356);
             float GLF_live8h = _GLF_FUZZED(726.982);
             float GLF_live8slope = _GLF_FUZZED(vec4(_GLF_IDENTITY(3533.3536, clamp(_GLF_IDENTITY(3533.3536, min(3533.3536, 3533.3536)), _GLF_IDENTITY(3533.3536, (false ? _GLF_FUZZED(thirty_two) : 3533.3536)), 3533.3536)), -3.9, 6585.2643, -7.2).r);
             float GLF_live8refh = _GLF_FUZZED(vec4(3.6, -3.4, 67.55, -6.5).a);
             vec2 GLF_live8coord = _GLF_FUZZED((-4724.5223 - vec2(28.25, 70.38)));
             vec2 GLF_live8uvstep = _GLF_FUZZED(vec2(-2401.0028, 87.36));
             {
              int GLF_live8_looplimiter0 = 0;
              if(_GLF_WRAPPED_IF_FALSE(false))
               {
               }
              else
               {
                while(GLF_live8h < GLF_live8refh && GLF_live8i < 32)
                 {
                  if(GLF_live8_looplimiter0 >= 4)
                   {
                    break;
                   }
                  GLF_live8_looplimiter0 ++;
                  GLF_live8coord -= GLF_live8uvstep;
                  GLF_live8refh += GLF_live8slope;
                  {
                   {
                    1;
                    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                     discard;
                   }
                  }
                  GLF_live8h = texture(GLF_live8tex, GLF_live8coord).y;
                  {
                   if(_GLF_DEAD(false))
                    return;
                   {
                    vec2 GLF_live13coord = vec2(GLF_live13gl_FragCoord.xy) * (1.0 / 256.0);
                    if(GLF_live13coord.x > 0.4)
                     {
                      if(GLF_live13coord.y < 0.6)
                       {
                        uvec2 GLF_live13icoord = uvec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                        uint GLF_live13res1 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) >> (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                        uint GLF_live13res2 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) << (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                        float GLF_live13res = float(((GLF_live13res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live13res1 & 1u) != 0u ? 1u : 0u));
                        GLF_live13_GLF_color = vec4(GLF_live13res, GLF_live13res, GLF_live13res, 1.0);
                       }
                      else
                       {
                        ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                        int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
                        int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
                        int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
                        GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
                       }
                     }
                    else
                     {
                      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                       return;
                      ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
                      int GLF_live13v = (GLF_live13icoord.x ^ GLF_live13icoord.y) * GLF_live13icoord.y;
                      bool GLF_live13res1 = ((GLF_live13v >> 10) & 1) != 0;
                      bool GLF_live13res2 = ((GLF_live13v >> 11) & 4) != 0;
                      bool GLF_live13res3 = ((GLF_live13v >> 12) & 8) != 0;
                      GLF_live13_GLF_color = vec4(GLF_live13res1 ? 1.0 : 0.0, GLF_live13res2 ? 1.0 : 0.0, GLF_live13res3 ? 1.0 : 0.0, 1);
                     }
                    if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
                     continue;
                   }
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    break;
                  }
                  GLF_live8i ++;
                 }
               }
             }
            }
            return;
           }
         }
        while(_GLF_WRAPPED_LOOP(false));
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          do
           {
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= sin(0.0)))))
             {
              _GLF_color = vec4(_GLF_IDENTITY(-383.519, min(-383.519, -383.519)), 982.241, 69.03, -6.7);
             }
            else
             {
             }
           }
          while(_GLF_WRAPPED_LOOP(false));
         }
        vec2 GLF_live3coord = _GLF_FUZZED((vec2(7.9, -86.37) * vec2(-166.214, 5.2)));
        {
         if(_GLF_DEAD(false))
          discard;
         float GLF_live12grey = _GLF_FUZZED((- 1432.5362));
         if(int(GLF_live12gl_FragCoord[1]) < 210)
          {
           GLF_live12grey = 0.5 + float(GLF_live12data[6]) / 10.0;
          }
         else
          {
           if(int(GLF_live12gl_FragCoord[1]) < 240)
            {
             GLF_live12grey = 0.5 + float(GLF_live12data[7]) / 10.0;
            }
           else
            {
             if(int(GLF_live12gl_FragCoord[1]) < 270)
              {
               GLF_live12grey = 0.5 + float(GLF_live12data[8]) / 10.0;
              }
             else
              {
               1;
              }
            }
          }
        }
        int GLF_live3i = _GLF_FUZZED((-20494 + -36555));
        int GLF_live3_looplimiter0 = 0;
        {
         if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_IDENTITY(bool(bool(false)), ! (! (bool(bool(false))))))))
          return;
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(false))
              {
               for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                {
                 return;
                }
              }
             {
              for(int _injected_loop_counter = (0 << _GLF_IDENTITY(int(7), int(7))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
               {
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                 return;
               }
              float GLF_live12grey = _GLF_FUZZED((9.3));
              {
               if(int(GLF_live12gl_FragCoord[1]) < 180)
                {
                 GLF_live12grey = 0.5 + float(GLF_live12data[5]) / 10.0;
                }
               else
                {
                 if(int(GLF_live12gl_FragCoord[1]) < 210)
                  {
                   do
                    {
                     GLF_live12grey = 0.5 + float(GLF_live12data[6]) / 10.0;
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, bool(bool(false))))))));
                  }
                 else
                  {
                   if(int(GLF_live12gl_FragCoord[1]) < 240)
                    {
                     for(int _injected_loop_counter = ((((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), int(1))) << _GLF_IDENTITY(int(1), _GLF_IDENTITY(int(1), (int(1)) ^ 0))) >> _GLF_IDENTITY(int(1), int(1))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
                      {
                       GLF_live12grey = 0.5 + float(GLF_live12data[7]) / 10.0;
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(_GLF_ZERO(0.0, injectionSwitch.x), 0.0, 0.0, 0.0, 0.0, log(1.0), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0))))))
                      return;
                    }
                   else
                    {
                     if(int(GLF_live12gl_FragCoord[1]) < 270)
                      {
                       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                        {
                         GLF_live12grey = 0.5 + float(GLF_live12data[8]) / 10.0;
                        }
                       else
                        {
                        }
                      }
                     else
                      {
                       1;
                      }
                    }
                  }
                }
              }
             }
             _GLF_color = (-9071.5798 - vec4(-4637.5673, -39.00, 597.375, -2835.1958));
            }
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_DEAD(false))
              {
               _GLF_color = mix(vec4(7.2, 2.9, -2.6, -512.068), vec4(26.99, -843.155, 1856.5323, 61.39), vec4(1116.1305, 9573.0672, 1410.7729, -7844.8414));
              }
            }
           else
            {
            }
          }
         else
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            discard;
           {
            {
             vec2 GLF_live13coord = _GLF_FUZZED(vec4(-8.0).ar);
             if(GLF_live13coord.y < 0.6)
              {
               uvec2 GLF_live13icoord = uvec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
               uint GLF_live13res1 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) >> (GLF_live13icoord.x & 31u)) & 0xffffffffu);
               if(_GLF_DEAD(false))
                continue;
               uint GLF_live13res2 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) << (GLF_live13icoord.x & 31u)) & 0xffffffffu);
               float GLF_live13res = float(((GLF_live13res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live13res1 & 1u) != 0u ? 1u : 0u));
               if(_GLF_DEAD(false))
                {
                 do
                  {
                   discard;
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                }
               GLF_live13_GLF_color = vec4(GLF_live13res, GLF_live13res, GLF_live13res, 1.0);
              }
             else
              {
               ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
               int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
               int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
               int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                {
                 GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
                }
              }
            }
            int GLF_live9v = _GLF_FUZZED(-70759);
            {
             int GLF_live9count = 0;
             if(_GLF_DEAD(false))
              {
               _GLF_color = (vec3(61.95, -465.729, -765.043) * mat4x3(-2821.7473, 2792.0989, -2.5, 3.6, 6.0, atan(-35.98), 664.661, -27.05, 8087.7610, 7.1, -7.2, max(3.4, -219.090)));
              }
             {
              if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
               return;
              int GLF_live9_looplimiter0 = _GLF_IDENTITY(0, 0 + (0));
              while(GLF_live9v > _GLF_IDENTITY(1, min(1, 1)))
               {
                if(_GLF_DEAD(false))
                 {
                  _GLF_color = mix(vec4(-3.0, 6.9, -1637.7148, 6.8), vec4(55.06, 1969.1299, 1248.8881, 1299.2994), (vec4(-61.97, 682.725, -39.26, -708.085) + -88.01));
                 }
                {
                 {
                  1;
                 }
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  discard;
                }
                if(GLF_live9_looplimiter0 >= 6)
                 {
                  break;
                 }
                if(_GLF_DEAD(false))
                 discard;
                GLF_live9_looplimiter0 ++;
                if((GLF_live9v & 1) == 1)
                 {
                  GLF_live9v = 3 * GLF_live9v + 1;
                 }
                else
                 {
                  GLF_live9v /= 2;
                 }
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                 {
                  _GLF_color = vec4(-9548.0411, -555.243, -524.069, 6.9);
                 }
                GLF_live9count ++;
               }
             }
             GLF_live9count;
            }
           }
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            break;
          }
         do
          {
           if(GLF_live3_looplimiter0 >= 7)
            {
             if(_GLF_DEAD(false))
              {
               _GLF_color = vec4(-187.163, -49.47, -4186.8838, -0.1);
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                 for(int _injected_loop_counter = _GLF_IDENTITY(0, (_GLF_IDENTITY(0, ~ (~ (0)))) / 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                  {
                   return;
                  }
                }
              }
             1;
            }
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
         for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_GLF_IDENTITY(_injected_loop_counter, (false ? _GLF_FUZZED(i) : _GLF_IDENTITY(_injected_loop_counter, clamp(_injected_loop_counter, _injected_loop_counter, _injected_loop_counter)))) != 0); _GLF_IDENTITY(_injected_loop_counter --, ~ (~ (_injected_loop_counter --))))
          {
           if(_GLF_WRAPPED_IF_FALSE(false))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
              continue;
            }
           else
            {
             GLF_live3_looplimiter0 ++;
             if(_GLF_DEAD(false))
              {
               {
                int GLF_live10count = _GLF_FUZZED(1645);
                int GLF_live10i = _GLF_FUZZED(-57104);
                int GLF_live10result = _GLF_FUZZED(-22721);
                {
                 1;
                 1;
                 1;
                 {
                  {
                   do
                    {
                     1;
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))));
                  }
                 }
                 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y))); _injected_loop_counter ++)
                  {
                   1;
                  }
                 1;
                 1;
                 do
                  {
                   1;
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                 1;
                 if(_GLF_DEAD(false))
                  continue;
                 1;
                 {
                  {
                   vec2 GLF_live13coord = vec2(GLF_live13gl_FragCoord.xy) * (1.0 / 256.0);
                   if(GLF_live13coord.x > 0.4)
                    {
                     if(GLF_live13coord.y < 0.6)
                      {
                       uvec2 GLF_live13icoord = uvec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                       uint GLF_live13res1 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) >> (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                       uint GLF_live13res2 = uint(((GLF_live13icoord.x * GLF_live13icoord.y) << (GLF_live13icoord.x & 31u)) & 0xffffffffu);
                       float GLF_live13res = float(((GLF_live13res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live13res1 & 1u) != 0u ? 1u : 0u));
                       GLF_live13_GLF_color = vec4(GLF_live13res, GLF_live13res, GLF_live13res, 1.0);
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                        return;
                      }
                     else
                      {
                       ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                       int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                        continue;
                       int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
                       int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
                       GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
                      }
                    }
                   else
                    {
                     ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
                     int GLF_live13v = (GLF_live13icoord.x ^ GLF_live13icoord.y) * GLF_live13icoord.y;
                     bool GLF_live13res1 = ((GLF_live13v >> 10) & 1) != 0;
                     bool GLF_live13res2 = ((GLF_live13v >> 11) & 4) != 0;
                     bool GLF_live13res3 = ((GLF_live13v >> 12) & 8) != 0;
                     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                      {
                       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                        discard;
                      }
                     else
                      {
                      }
                     GLF_live13_GLF_color = vec4(GLF_live13res1 ? 1.0 : 0.0, GLF_live13res2 ? 1.0 : 0.0, GLF_live13res3 ? 1.0 : 0.0, 1);
                    }
                  }
                 }
                 _GLF_IDENTITY(1, clamp(1, 1, _GLF_IDENTITY(1, 0 | (1))));
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  continue;
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(GLF_live10result == GLF_live10i)
                    {
                     GLF_live10count ++;
                    }
                  }
                 else
                  {
                  }
                 1;
                 1;
                 if(GLF_live10result == - 1)
                  {
                   GLF_live10count ++;
                  }
                 1;
                }
               }
               break;
              }
             if(_GLF_DEAD(false))
              return;
            }
          }
         GLF_live3coord = GLF_live3texel.xz + GLF_live3texel.yy;
         GLF_live3coord = floor(GLF_live3coord * 256.0) / 256.0;
         GLF_live3texel = texture(GLF_live3tex, GLF_live3coord);
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          discard;
         if(_GLF_DEAD(false))
          {
           do
            {
             _GLF_color = vec4(-8.3, 8.9, -9083.1620, -2560.7090);
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
          }
         GLF_live3i ++;
         {
          float GLF_live12grey = _GLF_FUZZED(197.957);
          {
           GLF_live12grey = 0.5 + float(GLF_live12data[3]) / 10.0;
          }
         }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           float GLF_live7data[10] = _GLF_FUZZED(float[10](8403.3467, 255.796, 863.524, 9150.4527, 45.63, 7.0, -4.6, 5.4, 656.381, 9022.9176));
           if(_GLF_DEAD(false))
            continue;
           if(_GLF_DEAD(false))
            break;
           int GLF_live7_looplimiter2 = 0;
           int GLF_live7i = _GLF_FUZZED(_GLF_IDENTITY((~ 89362), min((~ 89362), (~ 89362))));
           {
            int GLF_live9v = _GLF_FUZZED(-2182);
            {
             ivec2 GLF_live15p = _GLF_FUZZED((ivec2(1850, 57959) % 28084));
             {
              int GLF_live15_looplimiter1 = 0;
              while(GLF_live15p.x > 15)
               {
                if(GLF_live15_looplimiter1 >= 6)
                 {
                  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                   discard;
                  break;
                 }
                GLF_live15_looplimiter1 ++;
                for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != (int(_GLF_ZERO(0.0, injectionSwitch.x)) << _GLF_IDENTITY(int(0), int(0)))); _injected_loop_counter --)
                 {
                  GLF_live15p.x -= 16;
                 }
               }
             }
            }
            if((GLF_live9v & 1) == 1)
             {
              GLF_live9v = 3 * GLF_live9v + 1;
             }
            else
             {
              GLF_live9v /= 2;
              if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
               {
                do
                 {
                  discard;
                 }
                while(_GLF_WRAPPED_LOOP(false));
               }
             }
           }
           {
            if(GLF_live7_looplimiter2 >= 5)
             {
              if(_GLF_DEAD(false))
               discard;
              1;
              if(_GLF_DEAD(false))
               discard;
              {
               int GLF_live8i = _GLF_FUZZED(77192);
               float GLF_live8h = _GLF_FUZZED(((-0.0 - (924.838)) + (_GLF_IDENTITY(-6.7 + 3.1, (true ? _GLF_IDENTITY(-6.7 + 3.1, 1.0 * (-6.7 + 3.1)) : _GLF_FUZZED(53.24))))));
               float GLF_live8slope = _GLF_FUZZED((true ? vec2(14.85, 7.7).r : 2.1));
               float GLF_live8refh = _GLF_FUZZED(56.22);
               vec2 GLF_live8coord = _GLF_FUZZED(vec2(_GLF_IDENTITY(-2.7, float(mat3(_GLF_IDENTITY(-2.7, (true ? -2.7 : _GLF_FUZZED(GLF_live8h))), 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, sqrt(0.0), 1.0))), -667.945));
               vec2 GLF_live8uvstep = _GLF_FUZZED(vec2(_GLF_IDENTITY(-922.665, float(_GLF_IDENTITY(mat2x3(-922.665, 0.0, 1.0, 0.0, 0.0, abs(1.0)), transpose(transpose(mat2x3(-922.665, 0.0, 1.0, 0.0, 0.0, abs(1.0))))))), -8.0));
               {
                int GLF_live8_looplimiter0 = 0;
                while(GLF_live8h < GLF_live8refh && GLF_live8i < 32)
                 {
                  if(GLF_live8_looplimiter0 >= 4)
                   {
                    break;
                   }
                  {
                   vec2 GLF_live13coord = _GLF_FUZZED(vec2(5580.1834, 7812.0227).yx);
                   {
                    ivec2 GLF_live13icoord = ivec2(((GLF_live13coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                    int GLF_live13res3 = ((GLF_live13icoord.x >> 5) & 1) ^ ((GLF_live13icoord.y & 32) >> 5);
                    int GLF_live13res2 = (GLF_live13icoord.y * GLF_live13icoord.y >> 10) & 1;
                    int GLF_live13res1 = (GLF_live13icoord.x * GLF_live13icoord.y >> 9) & 1;
                    GLF_live13_GLF_color = vec4(float(GLF_live13res1 ^ GLF_live13res2), float(GLF_live13res2 & GLF_live13res3), float(GLF_live13res1 | GLF_live13res3), 1.0);
                   }
                   if(_GLF_DEAD(false))
                    return;
                  }
                  GLF_live8_looplimiter0 ++;
                  GLF_live8coord -= GLF_live8uvstep;
                  do
                   {
                    _GLF_IDENTITY(GLF_live8refh += GLF_live8slope, (GLF_live8refh += GLF_live8slope) * round(length(normalize(vec2(1.0, 1.0)))));
                   }
                  while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                  GLF_live8h = _GLF_IDENTITY(texture(GLF_live8tex, GLF_live8coord), mix(vec4(_GLF_FUZZED(-0.0), _GLF_FUZZED(89.43), (texture(GLF_live8tex, GLF_live8coord))[2], _GLF_FUZZED(-4999.9995)), vec4((texture(GLF_live8tex, GLF_live8coord))[0], _GLF_IDENTITY((texture(GLF_live8tex, GLF_live8coord))[1], mix(float(_GLF_FUZZED(-2174.1167)), float((texture(GLF_live8tex, GLF_live8coord))[1]), bool(true))), _GLF_FUZZED((92.02 + 76.92)), (texture(GLF_live8tex, GLF_live8coord))[3]), bvec4(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), true, _GLF_FALSE(false, (gl_FragCoord.x < 0.0)), true))).y;
                  GLF_live8i ++;
                 }
               }
              }
              if(_GLF_DEAD(false))
               {
                if(_GLF_DEAD(false))
                 continue;
                if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                 {
                  discard;
                 }
                else
                 {
                 }
                if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                 break;
               }
             }
            if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
             {
              if(_GLF_DEAD(false))
               break;
              {
               if(_GLF_DEAD(false))
                return;
               {
                GLF_live11_GLF_color = texture(GLF_live11tex, _GLF_IDENTITY(GLF_live11gl_FragCoord.xy, mix(vec2((GLF_live11gl_FragCoord.xy)[0], _GLF_FUZZED(-547.673)), vec2(_GLF_FUZZED(37.26), _GLF_IDENTITY((GLF_live11gl_FragCoord.xy)[1], ((GLF_live11gl_FragCoord.xy)[1]) + 0.0)), bvec2(false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))) * (1.0 / 256.0));
                {
                 ivec2 GLF_live15p = _GLF_FUZZED(ivec2(15340, -6645));
                 {
                  GLF_live15p.x = - GLF_live15p.x;
                 }
                }
                if(_GLF_DEAD(false))
                 {
                  _GLF_color = vec4(-8.1, 9.4, 6.3, 4.6);
                 }
               }
              }
              discard;
             }
            GLF_live7_looplimiter2 ++;
            {
             if(_GLF_DEAD(false))
              return;
             int GLF_live7_looplimiter1 = 0;
             {
              int GLF_live15i = _GLF_FUZZED(52341);
              ivec2 GLF_live15p = _GLF_FUZZED((ivec2(32689, 79511) % ivec2(44074, -54700)));
              {
               int GLF_live15_looplimiter0 = 0;
               for(               GLF_live15i = 0;
 GLF_live15i < 100; GLF_live15i ++)
                {
                 if(GLF_live15_looplimiter0 >= 6)
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    discard;
                   break;
                  }
                 GLF_live15_looplimiter0 ++;
                 GLF_live15p = GLF_live15iter(GLF_live15p);
                }
              }
             }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              continue;
             for(int GLF_live7j = 0; GLF_live7j < 10; GLF_live7j ++)
              {
               do
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  return;
                }
               while(_GLF_WRAPPED_LOOP(false));
               if(GLF_live7_looplimiter1 >= 5)
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_DEAD(false))
                    return;
                  }
                 else
                  {
                  }
                 if(_GLF_DEAD(false))
                  continue;
                 do
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                     if(_GLF_DEAD(false))
                      discard;
                     do
                      {
                       _GLF_color = vec4(-9693.0526, 504.042, 74.61, 5.1);
                      }
                     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
                    }
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 break;
                }
               do
                {
                 if(_GLF_DEAD(false))
                  return;
                }
               while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, bool(bvec4(false, true, true, false)))));
               GLF_live7_looplimiter1 ++;
               if(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(false), _GLF_IDENTITY(bool(_GLF_IDENTITY(bvec3(_GLF_WRAPPED_IF_FALSE(false), true, false), bvec3(bvec3(bvec3(_GLF_WRAPPED_IF_FALSE(false), true, false))))), false || (bool(_GLF_IDENTITY(bvec3(_GLF_WRAPPED_IF_FALSE(false), true, false), bvec3(bvec3(bvec3(_GLF_WRAPPED_IF_FALSE(false), true, false)))))))))
                {
                }
               else
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                  {
                   if(_GLF_WRAPPED_IF_TRUE(true))
                    {
                     return;
                    }
                   else
                    {
                    }
                  }
                }
               if(GLF_live7j < _GLF_IDENTITY(GLF_live7i, clamp(GLF_live7i, GLF_live7i, _GLF_IDENTITY(GLF_live7i, 0 ^ (GLF_live7i)))) + 1)
                {
                 continue;
                }
               bool GLF_live7doSwap = GLF_live7checkSwap(GLF_live7data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)], GLF_live7data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7j, 10)]);
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                break;
               if(GLF_live7doSwap)
                {
                 float GLF_live7temp = GLF_live7data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)];
                 if(_GLF_DEAD(false))
                  discard;
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                  }
                 else
                  {
                   GLF_live7data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = GLF_live7data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7j, 10)];
                  }
                 if(_GLF_DEAD(false))
                  continue;
                 GLF_live7data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7j, 10)] = GLF_live7temp;
                 if(_GLF_DEAD(false))
                  {
                   _GLF_color = tan(vec4(7.9, 7.6, -2419.2521, -6250.5154));
                  }
                }
               if(_GLF_DEAD(false))
                break;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              continue;
            }
           }
          }
         else
          {
           if(_GLF_DEAD(false))
            continue;
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             if(_GLF_DEAD(false))
              {
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                {
                 discard;
                }
              }
            }
           else
            {
            }
          }
         if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false || (_GLF_IDENTITY(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y, min(gl_FragCoord.y, _GLF_IDENTITY(gl_FragCoord.y, clamp(_GLF_IDENTITY(gl_FragCoord, clamp(_GLF_IDENTITY(gl_FragCoord, exp(vec4(0.0, 0.0, 0.0, 0.0)) * (gl_FragCoord)), gl_FragCoord, gl_FragCoord)).y, gl_FragCoord.y, _GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord.y, float(vec3(gl_FragCoord.y, 1.0, sqrt(1.0)))), max(gl_FragCoord.y, gl_FragCoord.y)))))) < 0.0)), bool(bvec4(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)), _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)))))))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            break;
           continue;
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = log((vec2(-4774.7617, -802.012) * mat4x2(6.8, 8.1, 461.927, 198.564, 1266.8285, -85.06, 22.32, -5775.7669)));
          }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          if(_GLF_DEAD(false))
           continue;
          if(_GLF_DEAD(false))
           continue;
          {
           float GLF_live12grey = _GLF_FUZZED(((4.4 - 6544.6529)));
           {
            do
             {
              GLF_live12grey = 0.5 + float(GLF_live12data[6]) / 10.0;
             }
            while(_GLF_WRAPPED_LOOP(false));
           }
          }
          _GLF_color = vec4(-2.5, -2.4, -58.80, 9.8);
         }
       }
       c[i] = c[i] * c[i];
      }
    }
   {
    ivec2 GLF_live15p = _GLF_FUZZED(ivec2(9284, -53327));
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
     int GLF_live15_looplimiter1 = 0;
     while(GLF_live15p.x > 15)
      {
       if(GLF_live15_looplimiter1 >= 6)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          discard;
         break;
        }
       GLF_live15_looplimiter1 ++;
       GLF_live15p.x -= 16;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
    }
   }
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_DEAD(false))
      return;
    }
  }
 _GLF_color = vec4(normalize(_GLF_IDENTITY(_GLF_IDENTITY(abs(_GLF_IDENTITY(c, vec3(mat3(_GLF_IDENTITY(c, (c) - vec3(0.0, 0.0, 0.0)), 1.0, 1.0, 1.0, determinant(mat4(0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, determinant(mat2(0.0, 0.0, 0.0, 0.0)), 0.0, 1.0, 0.0, 0.0)), sqrt(0.0), 0.0)))), vec3(_GLF_IDENTITY(mat3(abs(c), 0.0, 0.0, sqrt(sqrt(0.0)), 0.0, 0.0, determinant(mat4(1.0, 0.0, 1.0, determinant(mat3(0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0)), 0.0, sqrt(1.0), 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0))), mat3(1.0) * (mat3(abs(c), 0.0, 0.0, sqrt(sqrt(0.0)), 0.0, 0.0, determinant(mat4(1.0, 0.0, 1.0, determinant(mat3(0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0)), 0.0, sqrt(1.0), 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0))))))), (_GLF_IDENTITY(abs(c), _GLF_IDENTITY(vec3(vec4(abs(c), cos(0.0))), (vec3(vec4(abs(c), cos(_GLF_IDENTITY(0.0, min(0.0, 0.0)))))) * mat3(1.0)))) / exp(vec3(_GLF_IDENTITY(0.0, min(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(-5946.6135)), float(0.0), bool(true))), 0.0)), 0.0, 0.0)))), 1.0);
}
