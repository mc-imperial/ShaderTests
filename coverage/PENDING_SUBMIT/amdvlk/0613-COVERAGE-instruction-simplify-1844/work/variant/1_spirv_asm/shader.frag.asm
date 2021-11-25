; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 133
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %110
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func(i1;i1;"
               OpName %9 "x"
               OpName %10 "y"
               OpName %17 "arr0"
               OpName %20 "arr1"
               OpName %23 "i"
               OpName %26 "buf0"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %52 "a"
               OpName %53 "i"
               OpName %78 "a"
               OpName %79 "i"
               OpName %87 "j"
               OpName %96 "param"
               OpName %98 "param"
               OpName %110 "_GLF_color"
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 0
               OpDecorate %110 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %2 %7 %7
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 10
         %15 = OpTypeArray %6 %14
         %16 = OpTypePointer Private %15
         %17 = OpVariable %16 Private
         %18 = OpConstant %6 0
         %19 = OpConstantComposite %15 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18
         %20 = OpVariable %16 Private
         %21 = OpConstant %6 1
         %22 = OpConstantComposite %15 %21 %21 %21 %21 %21 %21 %21 %21 %21 %21
         %24 = OpConstant %13 4
         %25 = OpTypeArray %6 %24
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpTypePointer Uniform %6
         %38 = OpConstant %6 3
         %41 = OpTypeBool
         %46 = OpTypePointer Private %6
         %65 = OpConstant %6 6
         %94 = OpConstant %6 10
        %107 = OpTypeFloat 32
        %108 = OpTypeVector %107 4
        %109 = OpTypePointer Output %108
        %110 = OpVariable %109 Output
        %111 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %78 = OpVariable %7 Function
         %79 = OpVariable %7 Function
         %87 = OpVariable %7 Function
         %96 = OpVariable %7 Function
         %98 = OpVariable %7 Function
               OpStore %17 %19
               OpStore %20 %22
               OpStore %78 %21
               OpStore %79 %21
               OpBranch %80
         %80 = OpLabel
               OpLoopMerge %82 %83 None
               OpBranch %84
         %84 = OpLabel
         %85 = OpLoad %6 %78
         %86 = OpSLessThan %41 %85 %65
               OpBranchConditional %86 %81 %82
         %81 = OpLabel
               OpStore %87 %21
               OpBranch %88
         %88 = OpLabel
               OpLoopMerge %90 %91 None
               OpBranch %92
         %92 = OpLabel
         %93 = OpLoad %6 %87
         %95 = OpSLessThan %41 %93 %94
               OpBranchConditional %95 %89 %90
         %89 = OpLabel
         %97 = OpLoad %6 %87
               OpStore %96 %97
               OpStore %98 %94
         %99 = OpFunctionCall %2 %11 %96 %98
               OpBranch %91
         %91 = OpLabel
        %100 = OpLoad %6 %79
        %101 = OpLoad %6 %87
        %102 = OpIAdd %6 %101 %100
               OpStore %87 %102
               OpBranch %88
         %90 = OpLabel
               OpBranch %83
         %83 = OpLabel
        %103 = OpAccessChain %29 %28 %18 %18
        %104 = OpLoad %6 %103
               OpStore %79 %104
        %105 = OpLoad %6 %78
        %106 = OpIAdd %6 %105 %21
               OpStore %78 %106
               OpBranch %80
         %82 = OpLabel
        %112 = OpAccessChain %29 %28 %18 %111
        %113 = OpLoad %6 %112
        %114 = OpAccessChain %46 %20 %113
        %115 = OpLoad %6 %114
        %116 = OpConvertSToF %107 %115
        %117 = OpAccessChain %29 %28 %18 %111
        %118 = OpLoad %6 %117
        %119 = OpAccessChain %46 %17 %118
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %107 %120
        %122 = OpAccessChain %29 %28 %18 %21
        %123 = OpLoad %6 %122
        %124 = OpAccessChain %46 %20 %123
        %125 = OpLoad %6 %124
        %126 = OpConvertSToF %107 %125
        %127 = OpAccessChain %29 %28 %18 %38
        %128 = OpLoad %6 %127
        %129 = OpAccessChain %46 %20 %128
        %130 = OpLoad %6 %129
        %131 = OpConvertSToF %107 %130
        %132 = OpCompositeConstruct %108 %116 %121 %126 %131
               OpStore %110 %132
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %2 None %8
          %9 = OpFunctionParameter %7
         %10 = OpFunctionParameter %7
         %12 = OpLabel
         %23 = OpVariable %7 Function
         %52 = OpVariable %7 Function
         %53 = OpVariable %7 Function
         %30 = OpAccessChain %29 %28 %18 %21
         %31 = OpLoad %6 %30
               OpStore %23 %31
               OpBranch %32
         %32 = OpLabel
               OpLoopMerge %34 %35 None
               OpBranch %36
         %36 = OpLabel
         %37 = OpLoad %6 %23
         %39 = OpAccessChain %29 %28 %18 %38
         %40 = OpLoad %6 %39
         %42 = OpSLessThan %41 %37 %40
               OpBranchConditional %42 %33 %34
         %33 = OpLabel
         %43 = OpLoad %6 %23
         %44 = OpAccessChain %29 %28 %18 %21
         %45 = OpLoad %6 %44
         %47 = OpAccessChain %46 %17 %45
         %48 = OpLoad %6 %47
         %49 = OpAccessChain %46 %20 %43
               OpStore %49 %48
               OpBranch %35
         %35 = OpLabel
         %50 = OpLoad %6 %23
         %51 = OpIAdd %6 %50 %21
               OpStore %23 %51
               OpBranch %32
         %34 = OpLabel
               OpStore %52 %18
         %54 = OpLoad %6 %9
               OpStore %53 %54
               OpBranch %55
         %55 = OpLabel
               OpLoopMerge %57 %58 None
               OpBranch %59
         %59 = OpLabel
         %60 = OpLoad %6 %53
         %61 = OpLoad %6 %10
         %62 = OpSLessThan %41 %60 %61
               OpBranchConditional %62 %56 %57
         %56 = OpLabel
         %63 = OpLoad %6 %52
         %64 = OpIAdd %6 %63 %21
               OpStore %52 %64
         %66 = OpSGreaterThan %41 %63 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
               OpBranch %57
         %68 = OpLabel
         %70 = OpLoad %6 %53
         %71 = OpAccessChain %29 %28 %18 %21
         %72 = OpLoad %6 %71
         %73 = OpAccessChain %46 %20 %72
         %74 = OpLoad %6 %73
         %75 = OpAccessChain %46 %17 %70
               OpStore %75 %74
               OpBranch %58
         %58 = OpLabel
         %76 = OpLoad %6 %53
         %77 = OpIAdd %6 %76 %21
               OpStore %53 %77
               OpBranch %55
         %57 = OpLabel
               OpReturn
               OpFunctionEnd
