; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 120
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %56
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(i1;"
               OpName %9 "x"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %30 "i"
               OpName %46 "v"
               OpName %56 "_GLF_color"
               OpName %62 "a"
               OpName %65 "i"
               OpName %77 "param"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %56 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 6
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpConstant %6 3
         %21 = OpTypePointer Uniform %6
         %24 = OpTypeBool
         %28 = OpConstant %6 2
         %39 = OpConstant %6 4
         %43 = OpTypeFloat 32
         %44 = OpTypeVector %43 4
         %45 = OpTypePointer Function %44
         %53 = OpConstant %6 1
         %55 = OpTypePointer Output %44
         %56 = OpVariable %55 Output
         %89 = OpTypeVector %24 4
         %95 = OpConstant %6 5
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %62 = OpVariable %7 Function
         %65 = OpVariable %7 Function
         %77 = OpVariable %7 Function
         %63 = OpAccessChain %21 %18 %19 %19
         %64 = OpLoad %6 %63
               OpStore %62 %64
         %66 = OpAccessChain %21 %18 %19 %53
         %67 = OpLoad %6 %66
               OpStore %65 %67
               OpBranch %68
         %68 = OpLabel
               OpLoopMerge %70 %71 None
               OpBranch %72
         %72 = OpLabel
         %73 = OpLoad %6 %65
         %74 = OpAccessChain %21 %18 %19 %39
         %75 = OpLoad %6 %74
         %76 = OpSLessThan %24 %73 %75
               OpBranchConditional %76 %69 %70
         %69 = OpLabel
         %78 = OpLoad %6 %65
               OpStore %77 %78
         %79 = OpFunctionCall %6 %10 %77
         %80 = OpLoad %6 %62
         %81 = OpIAdd %6 %80 %79
               OpStore %62 %81
               OpBranch %71
         %71 = OpLabel
         %82 = OpLoad %6 %65
         %83 = OpIAdd %6 %82 %53
               OpStore %65 %83
               OpBranch %68
         %70 = OpLabel
         %84 = OpLoad %44 %56
         %85 = OpAccessChain %21 %18 %19 %28
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %43 %86
         %88 = OpCompositeConstruct %44 %87 %87 %87 %87
         %90 = OpFOrdEqual %89 %84 %88
         %91 = OpAll %24 %90
               OpSelectionMerge %93 None
               OpBranchConditional %91 %92 %93
         %92 = OpLabel
         %94 = OpLoad %6 %62
         %96 = OpAccessChain %21 %18 %19 %95
         %97 = OpLoad %6 %96
         %98 = OpIEqual %24 %94 %97
               OpBranch %93
         %93 = OpLabel
         %99 = OpPhi %24 %91 %70 %98 %92
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %115
        %100 = OpLabel
        %102 = OpAccessChain %21 %18 %19 %53
        %103 = OpLoad %6 %102
        %104 = OpConvertSToF %43 %103
        %105 = OpAccessChain %21 %18 %19 %19
        %106 = OpLoad %6 %105
        %107 = OpConvertSToF %43 %106
        %108 = OpAccessChain %21 %18 %19 %19
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %43 %109
        %111 = OpAccessChain %21 %18 %19 %53
        %112 = OpLoad %6 %111
        %113 = OpConvertSToF %43 %112
        %114 = OpCompositeConstruct %44 %104 %107 %110 %113
               OpStore %56 %114
               OpBranch %101
        %115 = OpLabel
        %116 = OpAccessChain %21 %18 %19 %19
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %43 %117
        %119 = OpCompositeConstruct %44 %118 %118 %118 %118
               OpStore %56 %119
               OpBranch %101
        %101 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %30 = OpVariable %7 Function
         %46 = OpVariable %45 Function
         %12 = OpLoad %6 %9
         %22 = OpAccessChain %21 %18 %19 %20
         %23 = OpLoad %6 %22
         %25 = OpSGreaterThan %24 %12 %23
               OpSelectionMerge %27 None
               OpBranchConditional %25 %26 %27
         %26 = OpLabel
               OpReturnValue %28
         %27 = OpLabel
         %31 = OpAccessChain %21 %18 %19 %19
         %32 = OpLoad %6 %31
               OpStore %30 %32
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %37
         %37 = OpLabel
         %38 = OpLoad %6 %30
         %40 = OpAccessChain %21 %18 %19 %39
         %41 = OpLoad %6 %40
         %42 = OpSLessThan %24 %38 %41
               OpBranchConditional %42 %34 %35
         %34 = OpLabel
         %47 = OpLoad %6 %9
         %48 = OpLoad %6 %30
         %49 = OpIAdd %6 %47 %48
         %50 = OpConvertSToF %43 %49
         %51 = OpCompositeConstruct %44 %50 %50 %50 %50
               OpStore %46 %51
               OpBranch %36
         %36 = OpLabel
         %52 = OpLoad %6 %30
         %54 = OpIAdd %6 %52 %53
               OpStore %30 %54
               OpBranch %33
         %35 = OpLabel
         %57 = OpLoad %44 %46
               OpStore %56 %57
         %58 = OpAccessChain %21 %18 %19 %53
         %59 = OpLoad %6 %58
               OpReturnValue %59
               OpFunctionEnd
