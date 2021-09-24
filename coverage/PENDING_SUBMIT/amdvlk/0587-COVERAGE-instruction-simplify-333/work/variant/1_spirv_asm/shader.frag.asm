; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 100
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %47 %77
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %16 "p"
               OpName %19 "i"
               OpName %29 "j"
               OpName %47 "gl_FragCoord"
               OpName %77 "_GLF_color"
               OpName %81 "buf0"
               OpMemberName %81 0 "_GLF_uniform_int_values"
               OpName %83 ""
               OpDecorate %47 BuiltIn FragCoord
               OpDecorate %77 Location 0
               OpDecorate %80 ArrayStride 16
               OpMemberDecorate %81 0 Offset 0
               OpDecorate %81 Block
               OpDecorate %83 DescriptorSet 0
               OpDecorate %83 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 128
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Private %9
         %11 = OpVariable %10 Private
         %12 = OpConstant %6 1
         %13 = OpConstantComposite %9 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12
         %14 = OpTypeVector %6 2
         %15 = OpTypePointer Function %14
         %17 = OpConstantComposite %14 %12 %12
         %18 = OpTypePointer Function %6
         %26 = OpConstant %6 8
         %27 = OpTypeBool
         %38 = OpTypePointer Private %6
         %44 = OpTypeFloat 32
         %45 = OpTypeVector %44 4
         %46 = OpTypePointer Input %45
         %47 = OpVariable %46 Input
         %48 = OpConstant %7 0
         %49 = OpTypePointer Input %44
         %52 = OpConstant %44 0
         %58 = OpConstant %7 1
         %69 = OpConstant %6 0
         %76 = OpTypePointer Output %45
         %77 = OpVariable %76 Output
         %78 = OpConstant %44 1
         %79 = OpConstant %7 2
         %80 = OpTypeArray %6 %79
         %81 = OpTypeStruct %80
         %82 = OpTypePointer Uniform %81
         %83 = OpVariable %82 Uniform
         %84 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %16 = OpVariable %15 Function
         %19 = OpVariable %18 Function
         %29 = OpVariable %18 Function
               OpStore %11 %13
               OpStore %16 %17
               OpStore %19 %12
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %19
         %28 = OpSLessThan %27 %25 %26
               OpBranchConditional %28 %21 %22
         %21 = OpLabel
               OpStore %29 %12
               OpBranch %30
         %30 = OpLabel
               OpLoopMerge %32 %33 None
               OpBranch %34
         %34 = OpLabel
         %35 = OpLoad %6 %29
         %36 = OpSLessThan %27 %35 %26
               OpBranchConditional %36 %31 %32
         %31 = OpLabel
         %37 = OpLoad %6 %29
         %39 = OpAccessChain %38 %11 %37
         %40 = OpLoad %6 %39
         %41 = OpIEqual %27 %40 %12
               OpSelectionMerge %43 None
               OpBranchConditional %41 %42 %43
         %42 = OpLabel
         %50 = OpAccessChain %49 %47 %48
         %51 = OpLoad %44 %50
         %53 = OpFOrdLessThan %27 %51 %52
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %55
         %54 = OpLabel
               OpBranch %33
         %55 = OpLabel
         %57 = OpLoad %6 %19
         %59 = OpAccessChain %18 %16 %58
               OpStore %59 %57
               OpBranch %43
         %43 = OpLabel
               OpBranch %33
         %33 = OpLabel
         %60 = OpLoad %6 %29
         %61 = OpIAdd %6 %60 %12
               OpStore %29 %61
               OpBranch %30
         %32 = OpLabel
               OpBranch %23
         %23 = OpLabel
         %62 = OpLoad %6 %19
         %63 = OpIAdd %6 %62 %12
               OpStore %19 %63
               OpBranch %20
         %22 = OpLabel
         %64 = OpAccessChain %18 %16 %48
         %65 = OpLoad %6 %64
         %66 = OpAccessChain %18 %16 %58
         %67 = OpLoad %6 %66
         %68 = OpIAdd %6 %65 %67
         %70 = OpAccessChain %38 %11 %68
               OpStore %70 %69
         %71 = OpAccessChain %38 %11 %26
         %72 = OpLoad %6 %71
         %73 = OpIEqual %27 %72 %69
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %95
         %74 = OpLabel
         %85 = OpAccessChain %84 %83 %69 %69
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %44 %86
         %88 = OpAccessChain %84 %83 %69 %69
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %44 %89
         %91 = OpAccessChain %84 %83 %69 %12
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %44 %92
         %94 = OpCompositeConstruct %45 %78 %87 %90 %93
               OpStore %77 %94
               OpBranch %75
         %95 = OpLabel
         %96 = OpAccessChain %84 %83 %69 %69
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %44 %97
         %99 = OpCompositeConstruct %45 %98 %98 %98 %98
               OpStore %77 %99
               OpBranch %75
         %75 = OpLabel
               OpReturn
               OpFunctionEnd
