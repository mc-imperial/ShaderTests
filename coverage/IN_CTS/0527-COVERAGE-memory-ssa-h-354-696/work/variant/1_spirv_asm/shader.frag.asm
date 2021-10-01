; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 135
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %116
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %15 "arr"
               OpName %18 "buf1"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %64 "buf0"
               OpMemberName %64 0 "_GLF_uniform_int_values"
               OpName %66 ""
               OpName %79 "a"
               OpName %116 "_GLF_color"
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 1
               OpDecorate %63 ArrayStride 16
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 0
               OpDecorate %116 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 9
         %13 = OpTypeArray %10 %12
         %14 = OpTypePointer Function %13
         %16 = OpConstant %11 3
         %17 = OpTypeArray %10 %16
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpTypePointer Uniform %10
         %47 = OpConstant %6 10
         %48 = OpTypeBool
         %51 = OpConstant %6 1
         %62 = OpConstant %11 4
         %63 = OpTypeArray %6 %62
         %64 = OpTypeStruct %63
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
         %67 = OpConstant %6 2
         %68 = OpTypePointer Uniform %6
         %73 = OpTypePointer Function %10
         %78 = OpTypePointer Function %6
         %96 = OpConstant %6 3
        %114 = OpTypeVector %10 4
        %115 = OpTypePointer Output %114
        %116 = OpVariable %115 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %15 = OpVariable %14 Function
         %79 = OpVariable %78 Function
               OpStore %8 %9
         %22 = OpAccessChain %21 %20 %9 %9
         %23 = OpLoad %10 %22
         %24 = OpAccessChain %21 %20 %9 %9
         %25 = OpLoad %10 %24
         %26 = OpAccessChain %21 %20 %9 %9
         %27 = OpLoad %10 %26
         %28 = OpAccessChain %21 %20 %9 %9
         %29 = OpLoad %10 %28
         %30 = OpAccessChain %21 %20 %9 %9
         %31 = OpLoad %10 %30
         %32 = OpAccessChain %21 %20 %9 %9
         %33 = OpLoad %10 %32
         %34 = OpAccessChain %21 %20 %9 %9
         %35 = OpLoad %10 %34
         %36 = OpAccessChain %21 %20 %9 %9
         %37 = OpLoad %10 %36
         %38 = OpAccessChain %21 %20 %9 %9
         %39 = OpLoad %10 %38
         %40 = OpCompositeConstruct %13 %23 %25 %27 %29 %31 %33 %35 %37 %39
               OpStore %15 %40
               OpBranch %41
         %41 = OpLabel
               OpLoopMerge %43 %44 None
               OpBranch %45
         %45 = OpLabel
         %46 = OpLoad %6 %8
         %49 = OpSLessThan %48 %46 %47
               OpBranchConditional %49 %42 %43
         %42 = OpLabel
         %50 = OpLoad %6 %8
         %52 = OpIAdd %6 %50 %51
               OpStore %8 %52
               OpBranch %53
         %53 = OpLabel
               OpLoopMerge %55 %56 None
               OpBranch %57
         %57 = OpLabel
         %58 = OpLoad %6 %8
         %59 = OpSLessThan %48 %58 %47
               OpBranchConditional %59 %54 %55
         %54 = OpLabel
         %60 = OpLoad %6 %8
         %61 = OpIAdd %6 %60 %51
               OpStore %8 %61
         %69 = OpAccessChain %68 %66 %9 %67
         %70 = OpLoad %6 %69
         %71 = OpAccessChain %21 %20 %9 %9
         %72 = OpLoad %10 %71
         %74 = OpAccessChain %73 %15 %70
         %75 = OpLoad %10 %74
         %76 = OpFAdd %10 %75 %72
         %77 = OpAccessChain %73 %15 %70
               OpStore %77 %76
         %80 = OpAccessChain %68 %66 %9 %9
         %81 = OpLoad %6 %80
               OpStore %79 %81
               OpBranch %82
         %82 = OpLabel
               OpLoopMerge %84 %85 None
               OpBranch %86
         %86 = OpLabel
         %87 = OpAccessChain %68 %66 %9 %67
         %88 = OpLoad %6 %87
         %89 = OpSGreaterThan %48 %88 %9
         %90 = OpLoad %6 %8
         %91 = OpSLessThan %48 %90 %47
         %92 = OpLogicalAnd %48 %89 %91
               OpBranchConditional %92 %83 %84
         %83 = OpLabel
         %93 = OpLoad %6 %8
         %94 = OpIAdd %6 %93 %51
               OpStore %8 %94
         %95 = OpLoad %6 %79
         %97 = OpAccessChain %68 %66 %9 %96
         %98 = OpLoad %6 %97
         %99 = OpSGreaterThan %48 %95 %98
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %101
        %100 = OpLabel
               OpBranch %84
        %101 = OpLabel
        %103 = OpLoad %6 %79
        %104 = OpIAdd %6 %103 %51
               OpStore %79 %104
               OpBranch %85
         %85 = OpLabel
               OpBranch %82
         %84 = OpLabel
               OpBranch %56
         %56 = OpLabel
               OpBranch %53
         %55 = OpLabel
               OpBranch %44
         %44 = OpLabel
               OpBranch %41
         %43 = OpLabel
        %105 = OpAccessChain %68 %66 %9 %67
        %106 = OpLoad %6 %105
        %107 = OpAccessChain %73 %15 %106
        %108 = OpLoad %10 %107
        %109 = OpAccessChain %21 %20 %9 %67
        %110 = OpLoad %10 %109
        %111 = OpFOrdEqual %48 %108 %110
               OpSelectionMerge %113 None
               OpBranchConditional %111 %112 %130
        %112 = OpLabel
        %117 = OpAccessChain %68 %66 %9 %9
        %118 = OpLoad %6 %117
        %119 = OpConvertSToF %10 %118
        %120 = OpAccessChain %68 %66 %9 %51
        %121 = OpLoad %6 %120
        %122 = OpConvertSToF %10 %121
        %123 = OpAccessChain %68 %66 %9 %51
        %124 = OpLoad %6 %123
        %125 = OpConvertSToF %10 %124
        %126 = OpAccessChain %68 %66 %9 %9
        %127 = OpLoad %6 %126
        %128 = OpConvertSToF %10 %127
        %129 = OpCompositeConstruct %114 %119 %122 %125 %128
               OpStore %116 %129
               OpBranch %113
        %130 = OpLabel
        %131 = OpAccessChain %68 %66 %9 %51
        %132 = OpLoad %6 %131
        %133 = OpConvertSToF %10 %132
        %134 = OpCompositeConstruct %114 %133 %133 %133 %133
               OpStore %116 %134
               OpBranch %113
        %113 = OpLabel
               OpReturn
               OpFunctionEnd
