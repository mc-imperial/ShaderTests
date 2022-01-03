; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 113
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %107
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %29 "i"
               OpName %40 "buf1"
               OpMemberName %40 0 "two"
               OpName %42 ""
               OpName %63 "i"
               OpName %107 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpMemberDecorate %40 0 Offset 0
               OpDecorate %40 Block
               OpDecorate %42 DescriptorSet 0
               OpDecorate %42 Binding 1
               OpDecorate %107 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 5
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpTypePointer Uniform %6
         %21 = OpConstant %6 1
         %24 = OpConstant %6 4
         %28 = OpTypePointer Function %6
         %36 = OpConstant %6 200
         %37 = OpTypeBool
         %40 = OpTypeStruct %6
         %41 = OpTypePointer Uniform %40
         %42 = OpVariable %41 Uniform
         %50 = OpConstant %6 3
         %64 = OpConstant %6 2
         %99 = OpConstant %6 6
        %104 = OpTypeFloat 32
        %105 = OpTypeVector %104 4
        %106 = OpTypePointer Output %105
        %107 = OpVariable %106 Output
        %108 = OpConstant %104 1
        %109 = OpConstant %104 0
        %110 = OpConstantComposite %105 %108 %109 %109 %108
        %112 = OpConstantComposite %105 %109 %109 %109 %109
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %29 = OpVariable %28 Function
         %63 = OpVariable %28 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %6 %19
         %22 = OpAccessChain %18 %16 %17 %21
         %23 = OpLoad %6 %22
         %25 = OpAccessChain %18 %16 %17 %24
         %26 = OpLoad %6 %25
         %27 = OpCompositeConstruct %9 %20 %23 %26
               OpStore %11 %27
               OpStore %29 %17
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %35 = OpLoad %6 %29
         %38 = OpSLessThan %37 %35 %36
               OpBranchConditional %38 %31 %32
         %31 = OpLabel
         %39 = OpLoad %6 %29
         %43 = OpAccessChain %18 %42 %17
         %44 = OpLoad %6 %43
         %45 = OpSGreaterThan %37 %39 %44
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %47
         %46 = OpLabel
               OpBranch %32
         %47 = OpLabel
         %49 = OpLoad %6 %29
         %51 = OpAccessChain %18 %16 %17 %50
         %52 = OpLoad %6 %51
         %53 = OpSDiv %6 %49 %52
         %54 = OpLoad %6 %29
         %55 = OpIEqual %37 %53 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
         %58 = OpLoad %6 %29
         %59 = OpLoad %6 %29
         %60 = OpAccessChain %28 %11 %58
               OpStore %60 %59
               OpBranch %57
         %57 = OpLabel
               OpBranch %33
         %33 = OpLabel
         %61 = OpLoad %6 %29
         %62 = OpIAdd %6 %61 %21
               OpStore %29 %62
               OpBranch %30
         %32 = OpLabel
         %65 = OpAccessChain %18 %16 %17 %64
         %66 = OpLoad %6 %65
               OpStore %63 %66
               OpBranch %67
         %67 = OpLabel
               OpLoopMerge %69 %70 None
               OpBranch %71
         %71 = OpLabel
         %72 = OpLoad %6 %63
         %73 = OpAccessChain %18 %16 %17 %24
         %74 = OpLoad %6 %73
         %75 = OpSLessThan %37 %72 %74
               OpBranchConditional %75 %68 %69
         %68 = OpLabel
         %76 = OpLoad %6 %63
         %77 = OpLoad %6 %63
         %78 = OpAccessChain %28 %11 %77
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %28 %11 %76
         %81 = OpLoad %6 %80
         %82 = OpIAdd %6 %81 %79
         %83 = OpAccessChain %28 %11 %76
               OpStore %83 %82
               OpBranch %70
         %70 = OpLabel
         %84 = OpLoad %6 %63
         %85 = OpIAdd %6 %84 %21
               OpStore %63 %85
               OpBranch %67
         %69 = OpLabel
         %86 = OpAccessChain %28 %11 %17
         %87 = OpLoad %6 %86
         %88 = OpIEqual %37 %87 %17
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %90
         %89 = OpLabel
         %91 = OpAccessChain %28 %11 %21
         %92 = OpLoad %6 %91
         %93 = OpIEqual %37 %92 %24
               OpBranch %90
         %90 = OpLabel
         %94 = OpPhi %37 %88 %69 %93 %89
               OpSelectionMerge %96 None
               OpBranchConditional %94 %95 %96
         %95 = OpLabel
         %97 = OpAccessChain %28 %11 %64
         %98 = OpLoad %6 %97
        %100 = OpIEqual %37 %98 %99
               OpBranch %96
         %96 = OpLabel
        %101 = OpPhi %37 %94 %90 %100 %95
               OpSelectionMerge %103 None
               OpBranchConditional %101 %102 %111
        %102 = OpLabel
               OpStore %107 %110
               OpBranch %103
        %111 = OpLabel
               OpStore %107 %112
               OpBranch %103
        %103 = OpLabel
               OpReturn
               OpFunctionEnd
