; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %12 %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "gl_FragCoord"
               OpName %21 "buf0"
               OpMemberName %21 0 "_GLF_uniform_int_values"
               OpName %23 ""
               OpName %33 "i"
               OpName %52 "_GLF_color"
               OpDecorate %12 BuiltIn FragCoord
               OpDecorate %20 ArrayStride 16
               OpMemberDecorate %21 0 Offset 0
               OpDecorate %21 Block
               OpDecorate %23 DescriptorSet 0
               OpDecorate %23 Binding 0
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 4
         %11 = OpTypePointer Input %10
         %12 = OpVariable %11 Input
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 0
         %15 = OpTypePointer Input %9
         %19 = OpConstant %13 2
         %20 = OpTypeArray %6 %19
         %21 = OpTypeStruct %20
         %22 = OpTypePointer Uniform %21
         %23 = OpVariable %22 Uniform
         %24 = OpConstant %6 0
         %25 = OpConstant %6 1
         %26 = OpTypePointer Uniform %6
         %29 = OpTypeBool
         %31 = OpConstant %6 -1
         %40 = OpConstant %6 5
         %42 = OpConstant %6 2
         %51 = OpTypePointer Output %10
         %52 = OpVariable %51 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %33 = OpVariable %7 Function
         %16 = OpAccessChain %15 %12 %14
         %17 = OpLoad %9 %16
         %18 = OpConvertFToS %6 %17
         %27 = OpAccessChain %26 %23 %24 %25
         %28 = OpLoad %6 %27
         %30 = OpSLessThan %29 %18 %28
         %32 = OpSelect %6 %30 %24 %31
               OpStore %8 %32
               OpStore %33 %24
               OpBranch %34
         %34 = OpLabel
               OpLoopMerge %36 %37 None
               OpBranch %38
         %38 = OpLabel
         %39 = OpLoad %6 %33
         %41 = OpSLessThan %29 %39 %40
               OpBranchConditional %41 %35 %36
         %35 = OpLabel
         %43 = OpLoad %6 %8
         %44 = OpSDiv %6 %43 %42
               OpStore %8 %44
               OpBranch %37
         %37 = OpLabel
         %45 = OpLoad %6 %33
         %46 = OpIAdd %6 %45 %25
               OpStore %33 %46
               OpBranch %34
         %36 = OpLabel
         %47 = OpLoad %6 %8
         %48 = OpIEqual %29 %47 %24
               OpSelectionMerge %50 None
               OpBranchConditional %48 %49 %66
         %49 = OpLabel
         %53 = OpAccessChain %26 %23 %24 %24
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %9 %54
         %56 = OpAccessChain %26 %23 %24 %25
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %9 %57
         %59 = OpAccessChain %26 %23 %24 %25
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %9 %60
         %62 = OpAccessChain %26 %23 %24 %24
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %9 %63
         %65 = OpCompositeConstruct %10 %55 %58 %61 %64
               OpStore %52 %65
               OpBranch %50
         %66 = OpLabel
         %67 = OpAccessChain %26 %23 %24 %25
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %9 %68
         %70 = OpCompositeConstruct %10 %69 %69 %69 %69
               OpStore %52 %70
               OpBranch %50
         %50 = OpLabel
               OpReturn
               OpFunctionEnd
