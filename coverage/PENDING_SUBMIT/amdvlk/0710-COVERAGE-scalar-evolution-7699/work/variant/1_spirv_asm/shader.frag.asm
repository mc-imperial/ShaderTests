; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 80
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %31 %61
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %18 "i"
               OpName %31 "gl_FragCoord"
               OpName %46 "buf0"
               OpMemberName %46 0 "_GLF_uniform_int_values"
               OpName %48 ""
               OpName %61 "_GLF_color"
               OpDecorate %31 BuiltIn FragCoord
               OpDecorate %45 ArrayStride 16
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 0
               OpDecorate %61 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %15 = OpTypeBool
         %16 = OpConstantTrue %15
         %17 = OpTypePointer Function %6
         %19 = OpConstant %6 0
         %26 = OpConstant %6 1
         %28 = OpTypeFloat 32
         %29 = OpTypeVector %28 4
         %30 = OpTypePointer Input %29
         %31 = OpVariable %30 Input
         %32 = OpTypeInt 32 0
         %33 = OpConstant %32 1
         %34 = OpTypePointer Input %28
         %37 = OpConstant %28 0
         %44 = OpConstant %32 2
         %45 = OpTypeArray %6 %44
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpTypePointer Uniform %6
         %60 = OpTypePointer Output %29
         %61 = OpVariable %60 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %54 = OpFunctionCall %6 %8
         %55 = OpAccessChain %49 %48 %19 %26
         %56 = OpLoad %6 %55
         %57 = OpIEqual %15 %54 %56
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %75
         %58 = OpLabel
         %62 = OpAccessChain %49 %48 %19 %26
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %28 %63
         %65 = OpAccessChain %49 %48 %19 %19
         %66 = OpLoad %6 %65
         %67 = OpConvertSToF %28 %66
         %68 = OpAccessChain %49 %48 %19 %19
         %69 = OpLoad %6 %68
         %70 = OpConvertSToF %28 %69
         %71 = OpAccessChain %49 %48 %19 %26
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %28 %72
         %74 = OpCompositeConstruct %29 %64 %67 %70 %73
               OpStore %61 %74
               OpBranch %59
         %75 = OpLabel
         %76 = OpAccessChain %49 %48 %19 %19
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %28 %77
         %79 = OpCompositeConstruct %29 %78 %78 %78 %78
               OpStore %61 %79
               OpBranch %59
         %59 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %18 = OpVariable %17 Function
               OpBranch %10
         %10 = OpLabel
               OpLoopMerge %12 %13 None
               OpBranch %14
         %14 = OpLabel
               OpBranchConditional %16 %11 %12
         %11 = OpLabel
               OpStore %18 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %18
         %27 = OpSLessThan %15 %25 %26
               OpBranchConditional %27 %21 %22
         %21 = OpLabel
         %35 = OpAccessChain %34 %31 %33
         %36 = OpLoad %28 %35
         %38 = OpFOrdGreaterThan %15 %36 %37
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %40
         %39 = OpLabel
               OpReturnValue %26
         %40 = OpLabel
               OpBranch %23
         %23 = OpLabel
         %42 = OpLoad %6 %18
         %43 = OpIAdd %6 %42 %26
               OpStore %18 %43
               OpBranch %20
         %22 = OpLabel
               OpBranch %13
         %13 = OpLabel
               OpBranch %10
         %12 = OpLabel
         %50 = OpAccessChain %49 %48 %19 %19
         %51 = OpLoad %6 %50
               OpReturnValue %51
               OpFunctionEnd
