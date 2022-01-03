; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 132
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %122
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func(f1;"
               OpName %10 "x"
               OpName %15 "v"
               OpName %19 "buf1"
               OpMemberName %19 0 "_GLF_uniform_float_values"
               OpName %21 ""
               OpName %32 "buf_push"
               OpMemberName %32 0 "one"
               OpName %34 ""
               OpName %50 "a"
               OpName %51 "i"
               OpName %54 "buf0"
               OpMemberName %54 0 "_GLF_uniform_int_values"
               OpName %56 ""
               OpName %70 "j"
               OpName %112 "a"
               OpName %115 "b"
               OpName %116 "param"
               OpName %122 "_GLF_color"
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 1
               OpMemberDecorate %32 0 Offset 0
               OpDecorate %32 Block
               OpDecorate %53 ArrayStride 16
               OpMemberDecorate %54 0 Offset 0
               OpDecorate %54 Block
               OpDecorate %56 DescriptorSet 0
               OpDecorate %56 Binding 0
               OpDecorate %122 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeInt 32 1
          %9 = OpTypeFunction %8 %7
         %13 = OpTypeVector %6 2
         %14 = OpTypePointer Function %13
         %16 = OpTypeInt 32 0
         %17 = OpConstant %16 2
         %18 = OpTypeArray %6 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %8 0
         %23 = OpTypePointer Uniform %6
         %32 = OpTypeStruct %8
         %33 = OpTypePointer PushConstant %32
         %34 = OpVariable %33 PushConstant
         %35 = OpTypePointer PushConstant %8
         %38 = OpConstant %8 1
         %39 = OpTypeBool
         %41 = OpConstant %16 0
         %49 = OpTypePointer Function %8
         %52 = OpConstant %16 3
         %53 = OpTypeArray %8 %52
         %54 = OpTypeStruct %53
         %55 = OpTypePointer Uniform %54
         %56 = OpVariable %55 Uniform
         %57 = OpTypePointer Uniform %8
         %66 = OpConstant %8 2
        %101 = OpConstant %8 -1
        %120 = OpTypeVector %6 4
        %121 = OpTypePointer Output %120
        %122 = OpVariable %121 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %112 = OpVariable %49 Function
        %115 = OpVariable %49 Function
        %116 = OpVariable %7 Function
        %113 = OpAccessChain %57 %56 %22 %38
        %114 = OpLoad %8 %113
               OpStore %112 %114
        %117 = OpAccessChain %23 %21 %22 %38
        %118 = OpLoad %6 %117
               OpStore %116 %118
        %119 = OpFunctionCall %8 %11 %116
               OpStore %115 %119
        %123 = OpLoad %8 %115
        %124 = OpConvertSToF %6 %123
        %125 = OpLoad %8 %112
        %126 = OpConvertSToF %6 %125
        %127 = OpLoad %8 %112
        %128 = OpConvertSToF %6 %127
        %129 = OpLoad %8 %115
        %130 = OpConvertSToF %6 %129
        %131 = OpCompositeConstruct %120 %124 %126 %128 %130
               OpStore %122 %131
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %8 None %9
         %10 = OpFunctionParameter %7
         %12 = OpLabel
         %15 = OpVariable %14 Function
         %50 = OpVariable %49 Function
         %51 = OpVariable %49 Function
         %70 = OpVariable %49 Function
         %24 = OpAccessChain %23 %21 %22 %22
         %25 = OpLoad %6 %24
         %26 = OpCompositeConstruct %13 %25 %25
               OpStore %15 %26
               OpBranch %27
         %27 = OpLabel
               OpLoopMerge %29 %30 None
               OpBranch %31
         %31 = OpLabel
         %36 = OpAccessChain %35 %34 %22
         %37 = OpLoad %8 %36
         %40 = OpSGreaterThanEqual %39 %37 %38
               OpBranchConditional %40 %28 %29
         %28 = OpLabel
         %42 = OpAccessChain %7 %15 %41
         %43 = OpLoad %6 %42
         %44 = OpAccessChain %23 %21 %22 %38
         %45 = OpLoad %6 %44
         %46 = OpFOrdGreaterThan %39 %43 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
               OpStore %50 %38
         %58 = OpAccessChain %57 %56 %22 %38
         %59 = OpLoad %8 %58
               OpStore %51 %59
               OpBranch %60
         %60 = OpLabel
               OpLoopMerge %62 %63 None
               OpBranch %64
         %64 = OpLabel
         %65 = OpLoad %8 %51
         %67 = OpAccessChain %57 %56 %22 %66
         %68 = OpLoad %8 %67
         %69 = OpSLessThan %39 %65 %68
               OpBranchConditional %69 %61 %62
         %61 = OpLabel
         %71 = OpAccessChain %57 %56 %22 %22
         %72 = OpLoad %8 %71
               OpStore %70 %72
               OpBranch %73
         %73 = OpLabel
               OpLoopMerge %75 %76 None
               OpBranch %77
         %77 = OpLabel
         %78 = OpLoad %8 %70
         %79 = OpAccessChain %57 %56 %22 %22
         %80 = OpLoad %8 %79
         %81 = OpAccessChain %35 %34 %22
         %82 = OpLoad %8 %81
         %83 = OpBitwiseXor %8 %80 %82
         %84 = OpINotEqual %39 %78 %83
               OpBranchConditional %84 %74 %75
         %74 = OpLabel
               OpBranch %85
         %85 = OpLabel
               OpLoopMerge %87 %88 None
               OpBranch %89
         %89 = OpLabel
         %90 = OpLoad %8 %50
         %91 = OpSGreaterThanEqual %39 %90 %22
               OpBranchConditional %91 %86 %87
         %86 = OpLabel
         %92 = OpAccessChain %23 %21 %22 %22
         %93 = OpLoad %6 %92
               OpStore %10 %93
         %94 = OpLoad %8 %50
         %95 = OpISub %8 %94 %38
               OpStore %50 %95
               OpBranch %88
         %88 = OpLabel
               OpBranch %85
         %87 = OpLabel
               OpBranch %76
         %76 = OpLabel
         %96 = OpLoad %8 %70
         %97 = OpISub %8 %96 %38
               OpStore %70 %97
               OpBranch %73
         %75 = OpLabel
               OpBranch %63
         %63 = OpLabel
         %98 = OpLoad %8 %51
         %99 = OpIAdd %8 %98 %38
               OpStore %51 %99
               OpBranch %60
         %62 = OpLabel
        %100 = OpLoad %8 %50
        %102 = OpIEqual %39 %100 %101
               OpSelectionMerge %104 None
               OpBranchConditional %102 %103 %104
        %103 = OpLabel
               OpReturnValue %38
        %104 = OpLabel
        %106 = OpLoad %6 %10
        %107 = OpCompositeConstruct %13 %106 %106
               OpStore %15 %107
               OpBranch %48
         %48 = OpLabel
               OpBranch %30
         %30 = OpLabel
               OpBranch %27
         %29 = OpLabel
        %108 = OpAccessChain %57 %56 %22 %38
        %109 = OpLoad %8 %108
               OpReturnValue %109
               OpFunctionEnd
